import { Router } from "express";
import { accountRequired, adminPrivilage } from "../middlewares/auth";
import { addCartItem, clearCart, deleteCartItem, getCart, updateCartItemQuantity } from "../controllers/cartController";


const cartRoutes= Router()

// get cart
// add cart item
// delete cart item
// clear cart
// update cart item

cartRoutes.get('', accountRequired, getCart)
cartRoutes.post('', accountRequired, addCartItem)
cartRoutes.delete('/:itemID', accountRequired, deleteCartItem)
cartRoutes.delete('', accountRequired, clearCart)
cartRoutes.patch('/:itemID', accountRequired, updateCartItemQuantity)


export default cartRoutes