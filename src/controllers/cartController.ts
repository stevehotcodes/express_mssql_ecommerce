import { Request, RequestHandler, Response } from "express";
import {v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'
import DatabaseHelper from "../helpers/databaseHelper";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import path from 'path';
import { IcartItem, IrequestInfo } from "../compiler/types";


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export const getCart = async (req:IrequestInfo, res:Response)=> {
    try {
        const cart = (await db.exec('getCart', {userID:req.info?.id!})).recordset
        if (!cart.length) {
            return res.status(404).json({message:'Your cart is empty.'})
        }
        return res.status(200).json(cart)
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const addCartItem = async (req:IrequestInfo, res:Response)=> {
    try {
        const userID = req.info?.id!
        const { productID, quantity } = req.body
        const cart:IcartItem[] = (await db.exec('getCart', {userID})).recordset
        let cartItem:IcartItem = cart.filter((item:IcartItem) =>{return item.userID==userID && item.productID == productID})[0]

        if (cartItem) {
            await db.exec('updateCartItemQuantity', {id:cartItem.id,quantity:cartItem.quantity += 1})
            return res.status(201).json({message: 'Cart item updated'})
        }
        else {
            const id = uid()
            await db.exec('addCartItem', {id, userID, productID, quantity})
            return res.status(201).json({message: 'Cart item added'})
        }
        
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteCartItem = async (req:IrequestInfo, res:Response)=> {
    const userID = req.info?.id!
    const {itemID} = req.params
    const cart:IcartItem[] = (await db.exec('getCart', {userID})).recordset
    let cartItem:IcartItem = cart.filter((item:IcartItem) =>{return item.id==itemID })[0]
    if (cartItem) {
        await db.exec('deleteCartItem', {id:itemID})
        return res.status(201).json({message: 'Cart item deleted.'})
    }
    else {
        return res.status(201).json({message: 'Item not in cart.'})
    }
}

export const clearCart = async (req:IrequestInfo, res:Response)=> {
    try {
        const userID = req.info?.id!
        await db.exec('clearCart', {userID})
        return res.status(201).json({message: 'Your cart has been cleared.'})
        
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const updateCartItemQuantity = async (req:IrequestInfo, res:Response)=> {
    try {
        const userID = req.info?.id!
        const {quantity} = req.body
        const id = req.params.itemID
        const cart:IcartItem[] = (await db.exec('getCart', {userID})).recordset
        let cartItem:IcartItem = cart.filter((item:IcartItem) =>{return item.id==id })[0]
        if (cartItem) {
            await db.exec('updateCartItemQuantity', {id:cartItem.id,quantity})
            return res.status(201).json({message: 'Cart item updated'})
        }
        else {
            return res.status(201).json({message: 'Item not in cart.'})
        }
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}