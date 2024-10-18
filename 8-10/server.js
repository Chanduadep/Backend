import express,{json} from "express";
import {Login,Register} from "./controllers/auth.controllers.js"
import allRoutes from './routes/index.js';
import dotenv from 'dotenv';
const app=express();
app.use(express.json());
dotenv.config();

app.get("/",(req,res)=>{
    res.send("Home Page");
});


app.use("/api/v1/", allRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port${process.env.PORT}`);
});