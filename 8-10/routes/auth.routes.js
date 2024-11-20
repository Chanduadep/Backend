import {Router} from "express";
import { Login, Register,getCurrentUSer } from "../controllers/auth.controllers.js";

const routes=Router();

routes.post("/login",Login);
routes.post("/register",Register);
routes.post("/get-currentuser",getCurrentUSer)

export default routes;