import { Request, Response } from "express";
import DatabaseHelper from "../helpers/databaseHelper";
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({path:path.resolve(__dirname, '../../.env')});

const db = DatabaseHelper.getInstance()

export const getCategories = async (req:Request, res:Response) => {
    try {
        const categories = (await db.exec('getCategories')).recordset
        if (!categories.length) {
            return res.status(404).json({message:'No categories were found.'})
        }
        return res.status(200).json(categories)
        
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const addCategory = async (req:Request, res:Response) => {
    try {
        let {categoryName, categoryDescription, superCategory} = req.body
        categoryName = categoryName.trim()

        const categories = (await db.exec('getCategories')).recordset
        const category = categories.filter((category) => {
            return category.categoryName.toLowerCase() === categoryName.toLowerCase()
        })[0]
        if (category) {
            return res.status(409).json({message: `category ${categoryName} exists.`})
        }

        const catSuperCategory = categories.filter((category) => {
            return category.superCategory === superCategory
        })[0]

        if (superCategory && !catSuperCategory) {
            return res.status(404).json({message: `category with ID ${superCategory} doesn't exist.`})
        }

        interface category {
            id?:number
            categoryName:string
            categoryDescription?:string
            superCategory?:number
        }

        let inputs:category = categoryDescription ? {categoryName, categoryDescription} : {categoryName}
        inputs = superCategory && catSuperCategory ? {...inputs, superCategory} : inputs
        
        await db.exec("addCategory", {...inputs})
        return res.status(201).json({message: `category ${categoryName} added successfully.`})
        
        
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteCategory = async (req:Request, res:Response) => {
    try {

        const {id} = req.params

        const categories = (await db.exec('getCategories')).recordset
        const category = categories.filter((category) => {
            return category.id === id
        })[0]

        if (category) {
            db.exec('deleteCategory', {id})
            return res.status(200).json({message: 'Category deleted.'})
        }

        return res.status(404).json({message: `Category with ID ${id} does not exist.`})
        
    } catch (error:any) {
        return res.status(500).json({message: error.message})
    }
}