import {Router} from 'express'
import {getProduct,addProduct,getAllProducts,updateProduct,deleteProduct} from "../controllers/productController"
import { adminPrivilage } from '../middlewares/auth'


const productRouter=Router()
// productRouter.get('/',getProducts)
productRouter.get('/:id', getProduct)
productRouter.post("", adminPrivilage, addProduct)
productRouter.get("", getAllProducts)
productRouter.put("/:id", adminPrivilage, updateProduct)
productRouter.delete("/:id", adminPrivilage, deleteProduct)

export default productRouter