import orderRoutes from './routes/orderRoutes'
import express, {json} from 'express'




const app=express()
app.use('/order',orderRoutes)