import {Request, Response } from "express";
import {v4 as uid} from 'uuid'
import DatabaseHelper from "../helpers/databaseHelper";
import dotenv from 'dotenv';
import path from 'path';
import { IcartItem, IrequestInfo, IsalesItem } from "../compiler/types";
import { log } from "console";

dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export  const  createNewOrder = async (req:IrequestInfo, res:Response)=>{
     
      try {
        const userID=req.info?.id!
        const orderID=uid();
        console.log(orderID)
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
          console.log(price);
          console.log("total",orderTotal);
          
          
          const saleId=uid()
          await db.exec('addSalesItem',{...rest,price,orderID,id:saleId})
        }


        // return res.status(200).json({message:`order created succesfully with id:${orderID} by user:${userID}`});
    
            
        // if(!cart.length){
        //   return  res.status(404).json({message:"cart is empty can not create the order"})
        // }
        

        // let orderId=uid()
        
        
        // await db.exec('createOrder',{orderId,userID:req.info?.id!})

        // cart.map(async (cartItem:IcartItem)=>{
        //   console.log(cartItem)
        //   let p:any = cartItem
        //   delete p.userID
        //   p.orderID = orderId
        //   p.price = (await db.exec('getProduct',{id:cartItem.productID})).recordset[0].price
        //   let salesItemPrice:any=p.price
        //   let salesItemID:any=p.orderID
        //   await db.exec("addSalesItem",{salesItemPrice,salesItemID})
          
        // })
        console.log("totalorder",orderTotal);
        
        return res.status(201).json({
          message:"order created successfully",
          orderTotal,
          itemsCount:cart.length
        })
        
    }
    catch(error:any){
      return res.status(500).json({message:error.message})
    }
}

// export const getOrderById =async (req:IsalesItem,res:Response) => {
//   try{ 
//     let id={req.orderID?}
  
//       const order:IsalesItem[]=await(await db.exec('getOrderById',{id:req.orderID})).recordset
//       return res.status(200).json(order)
//   }
//   catch(error:any){
//     return res.status(500).json(error.message)
//   }
// }














export const cancelOrderById =async (req:Request<{id:string}>, res:Response) => {
  try{
    
    // let orderID= req.info?.id!
    const {id}=req.params
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
      console.log(id)
      const orders= await(await db.exec("getOrdersByUser",{userID:id})).recordset
      console.log(orders)
      return res.status (200).json(orders)
  }
  catch{
       return res.status(404).json({message:"orders not found"})
  }
}
export const getAnOrderById =async (req:Request<{id:string}>,res:Response)=>{
  try{
      const {id}=req.params
      const order =(await db.exec('getAnOrderById', { id })).recordset[0]
      console.log(id)
      return res.status(200).json(order)
  }
  catch{
         return res.status(404).json({message:"order not found"})
  }
}

export const getAnOrderByStatus =async (req:Request<{status:string,id:string}>, res:Response) => {
  try{
      
      const{orderStatus,id}=req.body
      
      const order= (await db.exec('getAnOrderByStatus',{orderStatus,id})).recordset[0]
      console.log(id)
      return res.status(200).json(order)
  }
  catch{
       return res.status(404).json({message:"order not found"})
  }
}
export const getAllOrders=async(req:Request, res:Response)=>{
  try{
        
        let orders=await (db.exec('getAllOrders'))
        console.log(orders)
        return res.status(200).json(orders)
  }
  catch(error:any){
        return res.status(500).json({message:error.message})
  }
}
