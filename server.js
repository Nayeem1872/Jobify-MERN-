import express from "express";
import connectDB from "./db/connect.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import dotenv from 'dotenv'

dotenv.config();


const app = express()




//route
app.get('/',(req,res)=>{
    throw new Error('error')
    res.send('Welcome')
})


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