import mongoose, { Schema } from "mongoose";

type IUSER = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: string[];
  role: "USER" | "ADMIN";
};
const User: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
    address: { type: String, default: "" },
    role: { type: ["USER", "ADMIN"], default: "" }, //engiin hereglegch,noo ni admin]
    orderedFoods: { type: [Schema.ObjectId], red: "FoodsOrder" },
  },
  { timestamps: true }
);
export default mongoose.model<IUSER>("user", User);
