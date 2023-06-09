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

export interface IcartItemWithInfo extends IcartItem {
    productName:string
    price:number
    imageURL:string | null
}

export interface IsalesItem extends Iitem{
    price:number
    orderID:string
}

export interface nodemailerMessageOptions {
    from:string
    to:string
    subject?:string
    text?:string
    html?:string
}

export interface IresetPasswordData {
    id:string
    password:string

}


export interface Iproduct {
    id:string
    productName:string
    productDescription:string
    price:number
    stockQuantity?:number
    isDeleted?: 0 | 1
    brand?:string
    category?:number | null
}

export interface Iimage {
    id?:number
    imageURL:string
    isMain?:0|1
    productID:string
}

export interface Icategory {
    id?:number
    categoryName:string
    categoryDescription?:string
    superCategory?:number | null
}


export interface IorderWithInfo {
    id:string
    userID:string
    status: Tstatus
    orderDate:string
    items:IorderItemInfo[]
}

export interface IorderItemInfo {
    productID:string
    quantity:number
    productName:string
    price:number
    imageURL:string
}

export type Tstatus = 'processing' | 'shipping' | 'shipped' | 'canceled'