import { Router } from "express";
import { addUser, getAllUsers, getUserById, getUserByEmail, updateUser, deleteUser, signIn, forgotPassword, resetPassword } from "../controllers/userController";
import { accountRequired, adminPrivilage } from "../middlewares/auth";


const userRoutes= Router()

userRoutes.post('', addUser)
userRoutes.post('/signin', signIn)
userRoutes.get('', adminPrivilage, getAllUsers)
userRoutes.get('/u/:id', accountRequired, getUserById)
userRoutes.get('/u', accountRequired, getUserByEmail)
userRoutes.put('/u/:id', accountRequired, updateUser)
userRoutes.delete('/u/:id', accountRequired, deleteUser)

userRoutes.post('/forgot-password', forgotPassword)
userRoutes.patch('/reset-password', resetPassword)

export default userRoutes