import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "../Controller/ foodCategory.controller";

const router = express.Router();
router.get("/food-category/:foodCategoryId", getCategoryById); ///http://localhost:2000/api/food-category/:foodCategoryId
router.post("/food-category", addCategory); //http://localhost:2000/api/food-category
router.patch("/food-category/:id", updateCategory); //http://localhost:2000/api/food-category/67dae152c025a607210e9563
router.delete("/food-category/:foodCategoryId", deleteCategory); //http://localhost:2000/api/food-category/65ef1234567890abcdef1234
export default router;
