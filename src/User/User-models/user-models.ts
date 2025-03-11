import mongoose, { Schema } from "mongoose";

type IUSER = {
  name: string;
  email: string;
  password: string;
};
const User: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
export default mongoose.model<IUSER>("user", User);
