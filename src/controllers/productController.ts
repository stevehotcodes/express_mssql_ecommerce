import { Request,Response } from "express"
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from "../config"
import dotenv from 'dotenv';
import path from 'path';
import DatabaseHelper from "../helpers/databaseHelper";
import { Iimage, Iproduct } from "../compiler/types";


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export  const getProduct= async (req:Request, res:Response)=>{
  try{
    const {id} = req.params

    let product = await (await db.exec('getProduct', {id})).recordset[0]
    if(product){
        let images:Iimage[] = (await db.exec('getProductImages', {productID: id})).recordset
        return res.status(200).json({...product, images})
    }
    return  res.status(404).json({message: "The product is not available"})
  }
  catch(error:any){
    return  res.status(500).json({message: error.message})
    
  }
}

export const addProduct = async(req:Request, res:Response)=>{
   try{
    const id= uid()
    const {productName,productDescription,price, stockQuantity, brand, category}=req.body;
    if (!productName || !price || !productDescription) {
      return res.status(400).json({message: 'missing all or either productName, productDescription, and price'})
    }
    let inputs:Iproduct = {id, productName, productDescription, price}
    inputs = stockQuantity && stockQuantity >= 0 ? {...inputs, stockQuantity} : inputs
    inputs = brand ? {...inputs, brand} : inputs
    inputs = category ? {...inputs, category} : inputs

    await db.exec('addProduct', {...inputs})
    return res.status(201).json({message:"product added successfully", id})
   }
   catch(error:any){
    return res.status(500).json({message: error.message})
   }
}

export const getProducts=async (req:Request, res:Response)=>{
  try{
    const {category} = req.params

    let products:Iproduct[] = category ? (await db.exec('getProductsByCategory', {category})).recordset : (await db.exec('getAllProducts')).recordset

    if (!products.length) {
      return res.status(404).json({message: 'No products found'})
    }

    let images:Iimage[] = (await db.exec('getAllImages')).recordset
    let productsWithImages = products.map((product:Iproduct) => {
      let productImages = images.filter((image:Iimage) => {
        return image.productID === product.id
      })
      return {...product, images:productImages}
    })

    return res.status(200).json(productsWithImages)
  }
  
  catch(error:any){
    return res.status(500).json({message: error.message})
  }
  
}

export const updateProduct= async(req:Request, res:Response)=>{
  try{
    const {id}=req.params
    const {productName,productDescription,price, stockQuantity, brand, category} = req.body

    if (!productName || !price || !productDescription || !stockQuantity || !brand || !category) {
      return res.status(400).json({message: 'missing all or either productName, productDescription, price, stockQuantity, brand, and category'})
    }

    let product= await (await db.exec('getProduct', {id})).recordset[0]
    
    if(!product){
      return res.status(404).json({message:"the product does not exist"})
    }

    let inputs:Iproduct = {id, productName, productDescription, price, stockQuantity, brand, category}
    await db.exec('updateProduct', {...inputs})
    return res.status(200).json({message:"the product's details updated successfully"})

  }
  catch(error:any){
      return res.status(500).json({message: error.message})    
  }
}


export const deleteProduct= async(req:Request, res:Response)=>{
   try{
      let{id}=req.params
      let product= await (await db.exec('getProduct', {id})).recordset[0]

      if(!product){
        return res.status(404).json({message:"Product does not exist"})
      }

      await (await db.exec('deleteProduct', {id})).recordset[0]

      return res.status(200).json({message:"Product deleted successfully"})

   }
   catch (error:any){
     return res.status(500).json({message: error.message})
   }
}