import express from "express";
import {
  deleteUser,
  signIn,
  updateUser,
} from "../User-Controller/usercontroller";
const signinrouter = express.Router();
signinrouter.get("/", signIn);
signinrouter.delete("/:id", deleteUser);
signinrouter.put("/:id", updateUser);
export default signinrouter;
