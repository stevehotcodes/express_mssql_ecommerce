import express, {json} from 'express'
import userRoutes from './routers/userRoutes'
import productRouter from './routes/productRoutes'

const app=express()
app.use(json())// middleware
app.use('/users', userRoutes)
app.use('/products',productRouter)
// app.use('/allProducts', productRouter)


app.listen(4000, ()=>{
    console.log("Server Running...")
})