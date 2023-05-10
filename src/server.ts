import express, {json} from 'express'


const app=express()
app.use(json())// middleware


app.listen(4000, ()=>{
    console.log("Server Running...")
})