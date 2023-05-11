import express, {json} from 'express'
import userRoutes from './routers/userRoutes'

const app=express()
app.use(json())// middleware
app.use('/users', userRoutes)

app.listen(4000, ()=>{
    console.log("Server Running...")
})