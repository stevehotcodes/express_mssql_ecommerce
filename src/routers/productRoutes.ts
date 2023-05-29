import {Router} from 'express'
import {getProduct,addProduct,getAllProducts,updateProduct,deleteProduct} from "../controllers/productController"
import { adminPrivilage } from '../middlewares/auth'
import ImageRoutes from './imageRoutes'


const productRoutes=Router()
// productRoutes.get('/',getProducts)
productRoutes.get('/:id', getProduct)
productRoutes.post("", adminPrivilage, addProduct)
productRoutes.get("", getAllProducts)
productRoutes.put("/:id", adminPrivilage, updateProduct)
productRoutes.delete("/:id", adminPrivilage, deleteProduct)

productRoutes.use('/images', ImageRoutes)


export default productRoutes