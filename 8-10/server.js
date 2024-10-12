const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("Home Page");
});
app.get("/register",(req,res)=>{
    res.send("Register Page");
});
app.listen(8000,()=>{
    console.log("server is running on port 8000");
});