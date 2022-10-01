import express from "express";
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors'; 
//routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

 


const app = express()



//route
app.use(express.json())

app.get('/',(req,res)=>{
    // throw new Error('error')
    res.send('Welcome')
})
app.get('/api/v1',(req,res)=>{
    // throw new Error('error')
    res.json({ msg: 'Api' })
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',jobsRouter)

// console.log('hello');
//middleware

app.use(notFoundMiddleware)

app.use(errorHandlerMiddleware)



const port = process.env.PORT || 5000


app.listen(port, ()=>{
    console.log(`Server is listening ${port}`)
})

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
       
        console.log ("MongoDB Connected Successfully")
    }catch(error){
        console.log(error);
    }
}

start()