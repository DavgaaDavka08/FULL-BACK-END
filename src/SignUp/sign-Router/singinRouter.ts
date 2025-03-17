import express from "express";
import { SignUp } from "../Sign-Controller/signController";
const routerSignUp = express.Router();
routerSignUp.post("/", SignUp);
export default routerSignUp;
