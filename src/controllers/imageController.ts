import { Request, Response } from "express";
import DatabaseHelper from "../helpers/databaseHelper";
import dotenv from 'dotenv';
import path from 'path';
import { Iimage } from "../compiler/types";

dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export const addImage = async (req:Request, res:Response) => {
    try {
        const {productID} = req.params
        const {imageURL} = req.body
        await db.exec('addImage', {productID, imageURL})
        return res.status(201).json({message: 'Image added.'})
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const getAllImages = async (req:Request, res:Response) => {
    try {
        const images:Iimage[] = (await db.exec('getAllImages')).recordset
        if (!images.length) {
            return res.status(404).json({message: `No image were found.`})
        }
        return res.status(200).json(images)
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const getProductImages = async (req:Request, res:Response) => {
    try {
        const {productID} = req.params
        const images:Iimage[] = (await db.exec('getProductImages', {productID})).recordset
        if (!images) {
            return res.status(404).json({message: `No image found were found.`})
        }
        return res.status(200).json(images)
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const setMainImage = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const image:Iimage = (await db.exec('getImage', {id})).recordset[0]
        if (!image) {
            return res.status(404).json({message: `No image found with ID ${id}`})
        }
        await db.exec('setMainProductImage', {id, productID: image.productID})
        return res.status(200).json({message: `Image with ID ${id} has been set as the main image for product ${image.productID}`})
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteImage = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const image:Iimage = (await db.exec('getImage', {id})).recordset[0]
        if (!image) {
            return res.status(404).json({message: `No image found with ID ${id}`})
        }
        await db.exec('deleteImage', {id})
        return res.status(200).json({message: 'Image deleted'})
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}