import { NextFunction, Response } from "express"
import { signupSchema } from "../schemas/joiSchemas"
import { IrequestInfo } from "../compiler/types"


export const validateUser = (req:IrequestInfo, res:Response, next:NextFunction) => {
    try{
        const {error}= signupSchema.validate(req.body)
        if(error){ return res.status(400).json(error.details[0].message )}
        next()
    }catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}