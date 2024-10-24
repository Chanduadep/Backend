import express from "express";

import allRoutes from './routes/index.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app=express();
app.use(express.json());
dotenv.config();

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.use("/api/v1/", allRoutes)

mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoDb is connected")
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
});
