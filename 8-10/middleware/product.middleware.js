import User from "../models/user.schema.js";

export const checkIsUserValid=async (req,res,next)=>{
    try{
        const {userId}=req.body;
        if(!userId){
            return res.status(404).json({success:false,message:"user Id is required"}) 
        }
        const isUserExists=await User.findById(userId);
        if(!isUserExists){
            return res.status(404).json({success:false,message:"user is required"})
        }
        return next();
    }catch(error){
        return res.status(500).json({success:false,error})
    }
}