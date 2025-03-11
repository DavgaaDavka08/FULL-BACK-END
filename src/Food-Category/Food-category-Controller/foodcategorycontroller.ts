import { Request, Response } from "express";
import Foods from "../Food-Category-Models/foodcategorymodels";
export const addFood = async (req: Request, res: Response) => {
  try {
    const connectFood = req.body;
    const addfood = await Foods.create(connectFood);

    res.status(200).json({ massage: "amjilttai ", addfood });
  } catch (error) {
    res.status(400).json({ massage: "hool nemhed aldaa garlaa" });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const getfood = await Foods.find();
    res.status(200).json({ massage: "amjilttai ", getfood });
  } catch (error) {
    res.status(400).json({ massagee: "nemhed aldaa" });
  }
};
export const deleteFood = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteId = req.params.id;

    const deletedUser = await Foods.findByIdAndDelete(deleteId);

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
