import path from 'path'
import express, {json} from 'express'
import userRoutes from './routers/userRoutes'
import productRouter from './routes/productRoutes'
import cartRoutes from './routers/cartRoutes'

// API DOCS Imports
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerJsDocs = YAML.load(path.resolve(__dirname, '../api.yaml'))

const app=express()
app.use(json())// middleware

app.get('/', (req, res)=>{
    return res.status(200).send('Express MSSQL Ecommerce App. Go to /docs for the API documentation.')
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

app.use('/users', userRoutes)
app.use('/products',productRouter)
app.use('/cart', cartRoutes)

export default app