import express from "express";
import {
  deleteUser,
  signIn,
  updateUser,
} from "../User-Controller/usercontroller";
import { forgetPassword } from "../User-Controller/forgetcontroller";
import { resetPassword } from "../User-Controller/resetcontroller";

const signinrouter = express.Router();
signinrouter.post("/", signIn);
signinrouter.delete("/:id", deleteUser);
signinrouter.put("/:id", updateUser);
signinrouter.post("/reset-password-request", forgetPassword);
signinrouter.post("/reset-password", resetPassword);
export default signinrouter;
