import { Request, RequestHandler, Response } from "express";
import {v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'
import { IUser, IaddUserRequest, IrequestInfo, IupdateUserRequest, TfilterType } from "../compiler/types";
import DatabaseHelper from "../helpers/databaseHelper";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

function filterSensitiveUserInfo(users:IUser[]) {
    users.map((user:Partial<IUser>)=>{
        delete user.password // do not return passwords for users
        delete user.isDeleted // remove unnecessary isDeleted column
    })
}

export const addUser = async (req:IaddUserRequest, res:Response)=>{
    try {
        let id = uid() //a unique id
        let {firstname, lastname,email,password} =req.body
        password = await bcrypt.hash(password,10) // hash the password

        await db.exec('addUser', {id, firstname, lastname, email, password})
        return res.status(201).json({message:`User ${firstname} <${email}> has been registered successfully. Your ID is ${id}`})
    }
    catch (error:any) {
        return res.status(500).json(error.message) //server side error
    }
}

export const getAllUsers:RequestHandler = async (req,res)=>{
    try {
        let users:IUser[] = (await db.exec('getAllUsers')).recordset
        filterSensitiveUserInfo(users)
        res.status(200).json(users)
    }
    catch (error:any) {
         return res.status(500).json(error.message) // server side error
    }
}

async function getUser(filter_type:TfilterType, filter_value:string) {
    let user:IUser =(await db.exec('getUserBy', {filter_type,filter_value})).recordset[0]
    if(user){
        filterSensitiveUserInfo([user])
        return user
    }
}

export const getUserByEmail:RequestHandler = async (req,res)=>{
    try {
        const filter_type:TfilterType = "email"
        const {email}=req.query as {email:string}

        let user = await getUser(filter_type, email)

        if(user){
            return res.status(200).json(user)
        }
        return res.status(404).json({message:`No user is registered with email: ${email}`})
    } catch (error:any) {
         //server side error
         return res.status(500).json(error.message)
    }
}


export const getUserById:RequestHandler<{id:string}> = async (req,res)=>{
    try {
        const filter_type:TfilterType = "id"
        const {id}=req.params

        let user = await getUser(filter_type, id)

        if(user){
            return res.status(200).json(user)
        }
        return res.status(404).json({message:`User With ID ${id} Not Found`})
    } catch (error:any) {
         return res.status(500).json(error.message) //server side error
    }
}


export const updateUser = async (req:IupdateUserRequest, res:Response)=>{
    try {
        let {firstname, lastname,email,password} =req.body
        password = await bcrypt.hash(password,10)
        const {id}=req.params

        const filter_type:TfilterType = "id"
        let user = await getUser(filter_type, id)
        if(!user){
            return res.status(404).json({message:`User Not Found With ID: ${id}`})
        }

        if(id !== req.info?.id){ // only the user can update themselves
            return res.status(401).json({message:`Unauthorized`})
        }

        db.exec('updateUser', {id, firstname, lastname, email, password})
        return res.status(200).json({message:`User ${firstname} <${email}> Updated Successfully`})
    } catch (error:any) {
        return res.status(500).json(error.message) //server side error
    }
}


export const deleteUser = async (req:IrequestInfo, res:Response)=>{
    try {
           const {id}=req.params
           let user = await getUser('id', id)
           if(!user){ //no user found
               return res.status(404).json({message:`User With ID: ${id} Not Found`})
           }
           if(id != req.info?.id || req.info.role != 'admin'){ // only user themselves or admin can delete the user
               return res.status(401).json({message:`Unauthorized`})
           }

           await db.exec('deleteUser', {'id':id})
           return res.status(200).json({message:`User Deleted`})
    } catch (error:any) {
        return res.status(500).json(error.message)  // server side error
    }
}

export const signIn= async (req:Request, res:Response)=>{
    try {
        const{email,password}= req.body

        let user:IUser =(await db.exec('getUserBy', {filter_type:'email', filter_value:email})).recordset[0]

        if(!user){ return res.status(404).json({message:"User not Found"}) }

        let validPassword = await bcrypt.compare(password,user.password)
        if(!validPassword){ return res.status(404).json({message:`Incorrect credentials for <${email}>`}) }
    
        const name = user.firstname + ' ' + user.lastname
        const payload= {'id': user.id, name, 'email':user.email, 'role':user.role}
        const token = jwt.sign(payload, process.env.SECRET_KEY as string, {expiresIn:"43200s"}) 
        res.status(200).json({message:'Signin successful', email,token})

    }
    catch (error:any) { return res.status(500).json(error.message) }
}
