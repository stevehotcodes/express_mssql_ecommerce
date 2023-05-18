import {Request, Response } from "express";
import {v4 as uid} from 'uuid'
import DatabaseHelper from "../helpers/databaseHelper";
import dotenv from 'dotenv';
import path from 'path';
import { IcartItem, IrequestInfo, IsalesItem } from "../compiler/types";


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export  const  createNewOrder = async (req:IrequestInfo, res:Response)=>{
     
      try {
        const userID=req.info?.id!
        const orderID=uid();
        const cart:IcartItem[]= (await db.exec('getCart',{userID})).recordset
       
       //verifying cart content if cart is empty dont make order
        if (!cart.length) {
            return res.status(404).json({message:'Your cart is empty.'})
        }
        //if cart not empty proceed to make an order
        
        
        await db.exec('createOrder',{"id":orderID,userID});
        let orderTotal = 0
        //move cart items to sales 
        // await (await cart.forEach(async(item:IcartItem)=>
        
        for(const item of cart){
          const{userID,id,...rest}=item
          const price=await(await db.exec("getProduct",{id:item.productID})).recordset[0].price
          orderTotal += price
          
          const saleId=uid()
          await db.exec('addSalesItem',{...rest,price,orderID,id:saleId})
        }
        
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

    return res.status(204).json({message:"order canceled"})

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
       return res.status(500).json(error.message)
  }
}

export const getAnOrderById =async (req:IrequestInfo,res:Response)=>{
  try{
      const {id} = req.params
      const order =(await db.exec('getAnOrderById', { id })).recordset[0]

      if (!order) {
        return res.status(404).json({message:"order not found"})
      }
      if (req.info?.id == order.userID || req.info?.role == 'admin') {
        const orderSales = (await db.exec('getOrderSales', {orderID: id})).recordset
        let orderInfo = {...order, items: orderSales}
        return res.status(200).json(orderInfo)
        
      }
      return res.status(401).json({message: 'Unauthorized'})
      
  }
  catch(error:any){
         return res.status(500).json(error.message)
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
