import {Router} from 'express'
import {getProduct,addProduct,getAllProducts,updateProduct,deleteProduct} from "../controllers/productController"


const productRouter=Router()
// productRouter.get('/',getProducts)
productRouter.get('/:id',getProduct)
productRouter.post("",addProduct)
productRouter.get("",getAllProducts)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter