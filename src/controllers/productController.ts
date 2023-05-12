import { Request,Response } from "express"
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import {sqlConfig} from "../config"


interface Product{
    id:string
    // isDeleted:number
    // name:string
   
   
    
}

//SELECT * FROM products WHERE id=@id

export  const getProduct= async (req:Request, res:Response)=>{
  try{
    //creating server connection 
    const pool = await mssql.connect(sqlConfig)
    const{id}=req.params
    console.log(id);
    
    //make a request
    let product = (await(await pool.request())
    .input('id',id)
    .execute(("getProduct"))).recordset[0]

    if(product){
        return res.status(200).json(product)
    }
    return  res.status(500).json("The product is not available")
  }
  catch(error:any){
    return  res.status(500).json(error.message)
    
  }
}
//VALUES (@id,@productName,@productDescription,@price)
export const addProduct =async(req:Request, res:Response)=>{
   try{
      let pool= await mssql.connect(sqlConfig)
       let id= uid()
       console.log(id)
    const {productName,productDescription,price}=req.body;
    await((await pool.request())
    .input("id", id)
    .input('productName', productName)
    .input('productDescription', productDescription)
    .input('price', price)
    .execute("addProduct"))
    return res.status(200).json({message:"product added successfully"})
   }
   catch(error:any){
    return res.status(500).json(error.message)
   }
}

export const getAllProducts=async (req:Request, res:Response)=>{
  try{
     let pool=await mssql.connect(sqlConfig);
     let product=await(await pool.request().execute('getAllProducts')).recordset
     return res.status(200).json(product)
  }
  catch(error:any){
    return res.status(404).json(error.message)
  }
  
}

export const updateProduct= async(req:Request, res:Response)=>{
  try{
     
    let pool= await mssql.connect(sqlConfig)
    let {id}=req.params
    const{productName,productDescription,price}=req.body
    let product=(await(await pool.request())
                .input("id",id)  
                .execute("getProduct")).recordset[0]
    if(!product){
      return res.status(404).json({message:"'the product does not exist"})
    } 
    await(await pool.request()
         .input("id", id)
        .input("productName", productName)
        .input("productDescription", productDescription)
        .input("price", price)
        .execute("updateProduct")
    )
    return res.status(200).json({message:"the product's details updated successfully"})

  }
  catch(error:any){
      return res.status(404).json(error.message)    

  }
}


export const deleteProduct= async(req:Request, res:Response)=>{
   try{
      let pool=await mssql.connect(sqlConfig)
      let{id}=req.params
      let product= await(await pool.request()
      
      .input("id",id)
      .execute("getProduct")).recordset[0]
      if(!product){
        return res.status(404).json({message:"Product not available or does not exist"})
      }

      await(await pool.request().
      input("id",id)
      .execute("deleteProduct")
      )
      return res.status(200).json({message:"Product deleted successfully"})

    
   }
   catch{
     return res.status(500).json({message:"Delete operation unsuccessful"})
   }
}