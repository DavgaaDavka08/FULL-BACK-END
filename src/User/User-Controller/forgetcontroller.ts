import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { sendEmail } from "../../utils/send-email";
import userModels from "../User-models/user-models";

const jwtSecret = process.env.JWT_SECRET;

export const forgetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(401).json({ messsage: "Emailee oruulna uu" });
      return;
    }

    const user = await userModels.findOne({ email });
    console.log("user", user);

    if (!user) {
      res.status(401).json({ messsage: "Burtgeltei hereglegch alga" });
      return;
    }

    console.log("jwt-secret", jwtSecret);

    const token = jwt.sign({ id: user._id }, jwtSecret!, { expiresIn: "1h" });

    await sendEmail(email, token);
    res.status(200).json({ message: "amjilttai" });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa", error });
  }
};
