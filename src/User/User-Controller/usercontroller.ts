import { Request, Response } from "express";
import User from "../User-models/user-models";
export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      res.status(404).json({ massage: "hereglegch email burtgeltei baina" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(200).json({ massage: "amjilttai hereglegch burtgelee" });
  } catch (error) {
    res.status(400).json({ massage: "hereglegch burtgej chadsangui" });
  }
};
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ massage: "hadgalhad aldaa garlaa" });
  }
};
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser) {
      res.status(404).json({ message: "Хэрэглэгч олдсонгүй!" });
    }
    res
      .status(200)
      .json({ message: "Хэрэглэгч амжилттай устгагдлаа!", user: deleteUser });
  } catch (error) {
    res.status(400).json({ massaage: "ustgahad aldaa garlaa" });
  }
};
export const UpdateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    const updateuser = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        password,
      },
      { new: true }
    );
    if (!updateuser) {
      res.status(404).json({ massage: "hereglegch oldsongui" });
    }
    res
      .status(200)
      .json({ massage: "hereglegch amjilttai shinchillee", updateuser });
  } catch (error) {
    res.status(400).json({ massaage: "oorchlohod aldaa garlaa" });
  }
};
