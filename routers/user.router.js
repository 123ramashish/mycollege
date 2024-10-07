import { Router } from "express";
import UserController  from "../controllers/user.controller.js";




const userRouter = Router();

userRouter.post("/login",UserController.login);
userRouter.post("/signup",UserController.signup);



export default userRouter;