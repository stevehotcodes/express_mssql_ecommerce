import { Router } from "express";
import { addUser, getAllUsers, getUserById, getUserByEmail, updateUser, deleteUser } from "../controllers/userController";

const userRoutes= Router()

userRoutes.post('', addUser)
userRoutes.get('', getAllUsers)
userRoutes.get('/u/:id', getUserById)
userRoutes.get('/u', getUserByEmail)
userRoutes.put('/u/:id', updateUser)
userRoutes.delete('/u/:id',deleteUser)

export default userRoutes