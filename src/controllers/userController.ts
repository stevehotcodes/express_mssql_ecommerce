import { Request, RequestHandler, Response } from "express";
import {v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'
import { IUser, IaddUserRequest, IrequestInfo, IresetPasswordData, IupdateUserRequest, TfilterType } from "../compiler/types";
import DatabaseHelper from "../helpers/databaseHelper";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import path from 'path';
import securePassword from 'secure-random-password'
import ejs from 'ejs'
import NodeMail from "../helpers/nodemailerHelper";


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


export const forgotPassword:RequestHandler = async (req, res) => {
    // sends an email to the user to reset password
    try {
        let link = 'http://localhost:4000/users/reset-password'
        const {email} = req.query as {email:string}
        if (!email) {
            return res.status(400).json({message: 'provide an email in the query'})
        }
        const user = await getUser('email', email)
        if (user) {
            const newPassword = securePassword.randomPassword({
                length:12,
                characters: [
                    securePassword.upper,
                    securePassword.lower,
                    securePassword.symbols,
                    securePassword.digits
                ]
            })

            const token = jwt.sign({id:user.id,password:newPassword}, process.env.SECRET_KEY as string, {expiresIn:'300s'})
            link = link+'?reset='+token
            await ejs.renderFile(path.resolve(__dirname, '../../templates/reset-password-email.ejs'), {firstName:user.firstname, newPassword, link}, async (err, emailHTML)=>{
                if (err) {
                    console.error(err)
                    return false
                }
                const mailer = NodeMail.getInstance()
                await mailer.send(user.email, 'Password Reset Link', emailHTML)
                return true
            })
        }
        return res.status(200).json({message: `If a user exists with email: <${email}> a reset link will be sent to the email provided. Check spam folder in case you don't see any email.`})
    }
    catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const resetPassword = async (req:Request, res:Response) => {
    // resets the user password to the default that was sent in the email
    try {
        const {reset} = req.query as {reset:string}
        if (!reset) {
            return res.status(400).json({ message: 'Invalid password reset link.' })
        }

        const decodedData = jwt.verify(reset, process.env.SECRET_KEY as string) as IresetPasswordData
        const {id, password} = decodedData
        await db.exec('resetUserPassword', {id, password})
        return res.status(201).json({message:'Password reset successful.'})

    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}