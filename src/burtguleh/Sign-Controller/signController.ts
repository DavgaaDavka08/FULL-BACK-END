import { Request, Response } from "express";
import User from "../../User/User-models/user-models";
import { hashSync } from "bcryptjs";

export const SignUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password, email } = req.body;

    console.log(password, email);

    if (!email || !password) {
      res.status(404).json({ message: "email nuust ug" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "burtgeltei wmail" });
      return;
    }
    const hashedPassword = hashSync(password, 10);
    console.log("nuuuts ug ", hashedPassword);
    if (!hashedPassword) {
      res.status(401).json({ message: "nuuts ug buruu baina" });
      return;
    }
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "succses new user", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "hereglegch butgehed aldaa garaa" });
  }
};
