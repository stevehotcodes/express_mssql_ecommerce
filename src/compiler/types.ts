import {Request, RequestHandler, RequestParamHandler, Response} from 'express'

export interface IUser{
    id:string
    firstname:string
    lastname:string
    email:string
    role?:string
    isDeleted?:number
    password:string
}

export interface IaddUserRequest extends Request{
    body:{
       firstname:string
       lastname:string
       email:string
       password:string
    }
}

export interface IupdateUserRequest extends Request{
    body:{
       firstname:string
       lastname:string
       email:string
       password:string
    }
    info?:IdecodedData
}

export interface IrequestInfo extends Request {
    info?: IdecodedData
}

export type TfilterType = 'id' | 'email'

export interface IdecodedData{
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin'
}
export interface Iitem {
    id:string
    productID:string
    quantity:number
}

export interface IcartItem  extends Iitem{

    userID:string
    
}
export interface IsalesItem extends Iitem{
    price:number
    orderID:string
}