import express, {json} from 'express'
import userRoutes from './routers/userRoutes'
import productRouter from './routes/productRoutes'
import cartRoutes from './routers/cartRoutes'

const app=express()
app.use(json())// middleware
app.use('/users', userRoutes)
app.use('/products',productRouter)
app.use('/cart', cartRoutes)


app.listen(4000, ()=>{
    console.log("✔️ Server Running... 🚀")
})