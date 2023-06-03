import {Router} from 'express'
import {getProduct,addProduct,getProducts,updateProduct,deleteProduct} from "../controllers/productController"
import { adminPrivilage } from '../middlewares/auth'
import ImageRoutes from './imageRoutes'


const productRoutes=Router()
// productRoutes.get('/',getProducts)
productRoutes.get('/:id', getProduct)
productRoutes.post("", adminPrivilage, addProduct)
productRoutes.get("", getProducts)
productRoutes.get("/category/:category", getProducts)
productRoutes.put("/:id", adminPrivilage, updateProduct)
productRoutes.delete("/:id", adminPrivilage, deleteProduct)

productRoutes.use('/images', ImageRoutes)


export default productRoutes