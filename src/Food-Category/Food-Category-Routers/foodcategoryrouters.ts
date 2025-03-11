import express from "express";
import {
  addFood,
  deleteFood,
  getFood,
  updateFood,
} from "../Food-category-Controller/foodcategorycontroller";
const route = express.Router();
route.post("/", addFood);
route.get("/:id", getFood);
route.delete("/:id", deleteFood);
route.put("/:id", updateFood);
export default route;
