import { Router } from "express";
import { addUser, getAllUsers, getUserById, getUserByEmail, updateUser, deleteUser, signIn, forgotPassword, resetPassword } from "../controllers/userController";
import { accountRequired, adminPrivilage } from "../middlewares/auth";
import { validateUser } from "../middlewares/userValidation";


const userRoutes= Router()

userRoutes.post('', validateUser, addUser)
userRoutes.post('/signin', signIn)
userRoutes.get('', adminPrivilage, getAllUsers)
userRoutes.get('/u/:id', accountRequired, getUserById)
userRoutes.get('/u', accountRequired, getUserByEmail)
userRoutes.put('/u/:id', validateUser, accountRequired, updateUser)
userRoutes.delete('/u/:id', accountRequired, deleteUser)

userRoutes.post('/forgot-password', forgotPassword)
userRoutes.get('/reset-password', resetPassword)

export default userRoutes