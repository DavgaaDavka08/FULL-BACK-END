import { Request, Response } from "express";
import Foods from "../Models/food.models";
export const addFood = async (req: Request, res: Response) => {
  try {
    const connectFood = req.body;
    const addfood = await Foods.create(connectFood);

    res.status(200).json({ massage: "amjilttai ", addfood });
  } catch (error) {
    console.log(error);
    res.status(400).json({ massage: "hool nemhed aldaa garlaa" });
  }
};
export const getFood = async (req: Request, res: Response): Promise<void> => {
  try {
    const getfood = await Foods.find().populate("category");

    if (!getfood || getfood.length === 0) {
      res.status(404).json({ message: "Хоол олдсонгүй" });
    }

    res.status(200).json({ message: "Амжилттай!", getfood });
  } catch (error) {
    console.error("Хоол авахад алдаа гарлаа:", error);
    res.status(400).json({ message: "Хадгалах үед алдаа гарлаа", error });
  }
};
export const deleteFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteId = req.params.id;

    const deletedUser = await Foods.deleteMany();
    // const deletedUser = await Foods.findByIdAndDelete(deleteId);

    if (!deletedUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
    }
    res
      .status(200)
      .json({ message: "Хэрэглэгч амжилттай устгагдлаа!", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
export const updateFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateId = req.params.id;
    const deletedUser = await Foods.findByIdAndUpdate(updateId, req.body, {
      new: true,
    });
    if (!deletedUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
      return;
    }
    res.status(200).json({
      message: "hereglegch amjilttai shinechlegdlee",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа", error });
  }
};
