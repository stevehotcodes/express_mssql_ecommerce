import app from "./app"

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.resolve(__dirname, '../.env')});

const APPHOST = process.env.APPHOST || ''
const PORT = process.env.PORT || 4000


app.listen(+PORT, APPHOST, ()=>{
    console.log(`REST API docs available at ${APPHOST}:${PORT}/docs`);
    console.log("✔️  Server Running... 🚀")
})