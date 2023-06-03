import {Request, Response } from "express";
import {v4 as uid} from 'uuid'
import DatabaseHelper from "../helpers/databaseHelper";
import dotenv from 'dotenv';
import path from 'path';
import { IcartItem, IcartItemWithInfo, IorderItemInfo, IorderWithInfo, IrequestInfo, IsalesItem, Tstatus } from "../compiler/types";


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export  const  createNewOrder = async (req:IrequestInfo, res:Response)=>{
     
      try {
        const userID=req.info?.id!
        const orderID=uid();
        const cart:IcartItemWithInfo[]= (await db.exec('getCart',{userID})).recordset
       
       //verifying cart content if cart is empty dont make order
        if (!cart.length) {
            return res.status(404).json({message:'Your cart is empty.'})
        }
        //if cart not empty proceed to make an order
        
        
        await db.exec('createOrder',{id:orderID,userID});
        let orderTotal = 0

        //move cart items to sales 
        for(const item of cart){
          orderTotal += item.price
          const saleId = uid()
          await db.exec('addSalesItem',{productID:item.productID,quantity:item.quantity,price:item.price,orderID,id:saleId})
        }

        await db.exec('clearCart', {userID})
        
        return res.status(201).json({
          message:"order created successfully",
          orderTotal,
          itemsCount:cart.length,
          orderID
        })
        
    }
    catch(error:any){
      return res.status(500).json({message:error.message})
    }
}


export const cancelOrderById =async (req:IrequestInfo, res:Response) => {
  try{
    
    const userID = req.info?.id!
    const {id} = req.params
    const order = (await db.exec('getAnOrderById', {id})).recordset[0]
    if (!order) {
      return res.status(404).json({message: 'Order does not exist'})
    }
    if (req.info?.role! != 'admin' || order.userID != userID) {
      return res.status(401).json({message: 'Unauthorized'})
    }

    await db.exec('cancelOrderById',{id})

    return res.status(200).json({message:"order canceled"})

  }
  catch(error:any){
       return res.status(500).json({message:error.message})

  }
}
export const getOrdersByUser= async(req:IrequestInfo,res:Response)=>{
  try{
      const id=req.info?.id!
      const orders= await(await db.exec("getOrdersByUser",{userID:id})).recordset
      if (orders.length) { return res.status (200).json(orders) }
      return res.status(404).json({message:"orders not found"})
  }
  catch(error:any){
       return res.status(500).json({message: error.message})
  }
}

export const getAnOrderById =async (req:IrequestInfo,res:Response)=>{
  try{
      const {id} = req.params
      const orderItems =(await db.exec('getAnOrderById', { id })).recordset

      if (!orderItems.length) {
        return res.status(404).json({message:"order not found"})
      }

      if (req.info?.id == orderItems[0].userID || req.info?.role == 'admin') {
        // const orderSales = (await db.exec('getOrderSales', {orderID: id})).recordset
        let orderWithInfo:Partial<IorderWithInfo> = {id:orderItems[0].id as string, status: orderItems[0].status as Tstatus, userID: orderItems[0].userID as string, orderDate:orderItems[0].orderDate as string}
        let orderItemsWithInfo:IorderItemInfo[] = orderItems.map((item) => {
          const {orderID, status, userID, orderDate, ...rest} = item
          return rest
        })
        orderWithInfo['items'] = orderItemsWithInfo
        return res.status(200).json(orderWithInfo)
        
      }
      return res.status(401).json({message: 'Unauthorized'})
      
  }
  catch(error:any){
         return res.status(500).json({message: error.message})
  }
}

export const getAnOrderByStatus =async (req:Request<{status:string,id:string}>, res:Response) => {
  try{
      
      const{orderStatus,id}=req.body
      
      const order= (await db.exec('getAnOrderByStatus',{orderStatus,id})).recordset[0]
      return res.status(200).json(order)
  }
  catch{
       return res.status(404).json({message:"order not found"})
  }
}
export const getAllOrders=async(req:Request, res:Response)=>{
  try{
        
        let orders=await (db.exec('getAllOrders'))
        return res.status(200).json(orders)
  }
  catch(error:any){
        return res.status(500).json({message:error.message})
  }
}
