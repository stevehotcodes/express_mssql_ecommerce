import path from 'path'
import express, {json} from 'express'
import cors from 'cors'
import userRoutes from './routers/userRoutes'
import productRoutes from './routers/productRoutes'
import cartRoutes from './routers/cartRoutes'
import orderRoutes from './routers/orderRoutes'
import categoryRoutes from './routers/categoryRoutes'

// API DOCS Imports
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'


const swaggerJsDocs = YAML.load(path.resolve(__dirname, '../api.yaml'))

const app=express()

app.use(cors())
app.use(json())

app.get('/', (req, res)=>{
    return res.status(200).send('Express MSSQL Ecommerce App. Go to /docs for the API documentation.')
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use('/users', userRoutes)
app.use('/products',productRoutes)
app.use('/cart', cartRoutes)
app.use('/orders',orderRoutes)
app.use('/categories', categoryRoutes)

export default app
