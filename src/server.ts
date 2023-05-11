import express, {json} from 'express'

import productRouter from './routes/productRoutes'


const app=express()
app.use(json())// middleware

app.use('/products',productRouter)
// app.use('/allProducts', productRouter)


app.listen(4000, ()=>{
    console.log("Server Running...")
})