import { Router } from "express";
import { cancelOrderById, createNewOrder,  getAllOrders, getAnOrderById, getAnOrderByStatus, getOrdersByUser } from "../controllers/orderController";
import { accountRequired, adminPrivilage } from "../middlewares/auth";

const orderRoutes=Router();

orderRoutes.post("", accountRequired, createNewOrder)
orderRoutes.get("", accountRequired, getOrdersByUser)
orderRoutes.patch("/cancel/:id", accountRequired, cancelOrderById)
orderRoutes.get("/:id",accountRequired,getAnOrderById)
// orderRoutes.patch("/:id",accountRequired,getAnOrderById)
orderRoutes.post("/status",accountRequired,getAnOrderByStatus)
orderRoutes.get("/all ", adminPrivilage, getAllOrders)

export default orderRoutes
