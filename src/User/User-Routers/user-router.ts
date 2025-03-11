import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  UpdateUser,
} from "../User-Controller/usercontroller";
const router = express.Router();
router.post("/", addUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", UpdateUser);
export default router;
