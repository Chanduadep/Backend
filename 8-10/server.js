import express,{json} from "express";
import {Login,Register} from "./controllers/auth.controllers.js"
import allRoutes from './routes/index.js';
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Home Page");
});


app.use("/api/v1/", allRoutes)

app.listen(8000,()=>{
    console.log("server is running on port 8000");
});