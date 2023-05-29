import { Router } from 'express'
import { addCategory, deleteCategory, getCategories } from '../controllers/categoryController'
import { adminPrivilage } from '../middlewares/auth'


const categoryRoutes = Router()

categoryRoutes.get('', getCategories)
categoryRoutes.post('', adminPrivilage, addCategory)
categoryRoutes.delete('/:id', adminPrivilage, deleteCategory)


export default categoryRoutes