import { Request, Response } from "express";
import User from "../User-models/user-models";
import { compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    console.log(" password:>> ", password);
    console.log("email :>> ", email);
    if (!email || !password) {
      res.status(400).json({ message: "email nuuts ug oruul" });
      return;
    }
    const user = await User.findOne({ email });
    console.log("user :>> ", user);
    if (!user) {
      res.status(404).json({ message: "hereglegch burtgelgui baina" });
      return;
    }
    if (!user.password) {
      res.status(500).json({ message: "nuuts ug oldsongui" });
      return;
    }
    const isCorrect = compareSync(password, user.password);
    console.log(user.password);
    console.log(password);
    if (!isCorrect) {
      res.status(401).json({ message: "nuuts ui buruu baina" });
      return;
    }
    res.status(200).json({ message: "succses signUp" });
  } catch (error) {
    res.status(500).json({ message: "newtrehed aldaa garlaa" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(404).json({ message: "oldsongui" });
      return;
    }

    res.status(200).json({ message: "amjilttai ustgalaa", user: deletedUser });
  } catch (error) {
    res.status(400).json({ message: "error in delete" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "Хэрэглэгч oldsongui" });
      return;
    }
    res.status(200).json({ message: "shinechllee", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "error in update" });
  }
};
