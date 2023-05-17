import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.resolve(__dirname, '../../.env')});


const config = {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port:587,
    requireTLS:true,
    auth: {
        user:process.env.NODEMAILER_EMAIL as string,
        pass:process.env.NODEMAILER_PASSWORD as string
    }
  }

  export default config