import express from "express";
import {
  addFood,
  deleteFood,
  getFood,
  updateFood,
} from "../Controller/food.controller";
const route = express.Router();
route.post("/", addFood);
route.get("/", getFood);
route.delete("/:id", deleteFood);
route.put("/:id", updateFood);
export default route;
