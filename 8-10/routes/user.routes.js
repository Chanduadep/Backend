import { Router } from "express";
import { getUserDetails } from "../controllers/user.controllers.js";

const userRoutes=Router();

userRoutes.post("/getProfile",getUserDetails)

export default userRoutes;