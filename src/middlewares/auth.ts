import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname, '../../.env')})
import jwt from 'jsonwebtoken'
import { IdecodedData, IrequestInfo } from '../compiler/types'


function verify(req:IrequestInfo, res:Response, privilage: false | 'admin'=false){
    try {
        const token = req.headers['token'] as string
        let message = 'Unauthorized'
        if(!token){ return res.status(401).json({message}) } // authentication
 
        const dedodedData = jwt.verify(token, process.env.SECRET_KEY as string) as IdecodedData
        req.info=dedodedData

        if (privilage && dedodedData.role !== privilage) { // authorization
            return res.status(401).json({message})
        }
     }
     catch (error:any) { return res.status(403).json({message:error.message}) }
     return false // if no errors verifying token, return false
}

export const accountRequired =(req:IrequestInfo, res:Response, next:NextFunction)=>{
    const error = verify(req, res)
    if (error) {return error}
    next()
}

export const adminPrivilage =(req:IrequestInfo, res:Response, next:NextFunction)=>{
    const error = verify(req, res, 'admin')
    if (error) {return error}
    next()
}