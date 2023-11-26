import dotenv from "dotenv"
import connectDB from "./db/index.js";
import express from "express"
const app=express()
dotenv.config({
    path:"./env"
})
connectDB()
.then(()=>{
    app.listen(process.env.port || 8080,()=>{
        console.log(`Server is runnnig at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB connection fail",err)
})