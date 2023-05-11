import {Request, RequestHandler, Response} from 'express'

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

export type TfilterType = 'id' | 'email'
