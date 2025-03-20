import { Request, Response } from "express";
import FoodCategorySchema from "../Models/foodCategory.model";

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const getfood = await FoodCategorySchema.find();
    res.status(200).json({ message: "Амжилттай", getfood });
  } catch (error) {
    res.status(400).json({ message: "Нэмэхэд алдаа гарлаа" });
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const connectFood = req.body;
    const newCategory = await FoodCategorySchema.create(connectFood);

    res.status(201).json({
      message: "Ангилал амжилттай нэмэгдлээ",
      foodCategory: newCategory, // ✅ categoryName -> foodType болж өөрчлөгдөнө
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Ангилал нэмэхэд алдаа гарлаа" });
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteId = req.params.id;
    const deletedUser = await FoodCategorySchema.deleteMany();
    if (!deletedUser) {
      res.status(404).json({ message: "Ангилал олдсонгүй" });
    }
    res
      .status(200)
      .json({ message: "Ангилал амжилттай устлаа", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateId = req.params.id;
    console.log("Received ID:", updateId); // ✅ ID хэвлэх

    if (!updateId) {
      res.status(400).json({ message: "ID илгээх шаардлагатай!" });
      return;
    }

    const updateData = req.body;
    if (!updateData || Object.keys(updateData).length === 0) {
      res.status(400).json({ message: "Шинэчлэх өгөгдөл байхгүй байна!" });
      return;
    }

    const updatedCategory = await FoodCategorySchema.findByIdAndUpdate(
      updateId,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCategory) {
      res.status(404).json({ message: "Ангилал олдсонгүй" });
      return;
    }

    res.status(200).json({
      message: "Ангилал амжилттай шинэчлэгдлээ",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Ангилал шинэчлэхэд алдаа гарлаа:", error);
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
