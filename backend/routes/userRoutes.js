import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import { sendEmail } from "../config/sendEmail.js";
import {registerController,loginController} from "../controllers/userController.js";


const router = express.Router();

router.post("/register",registerController)

router.post("/login",loginController)

export default router;