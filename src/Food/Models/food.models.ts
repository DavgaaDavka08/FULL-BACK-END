import mongoose, { Schema, Document } from "mongoose";

interface IFood extends Document {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: mongoose.Types.ObjectId; /// FoodCategory-тэй холбогдох ObjectId
  createdAt?: Date;
  updatedAt?: Date;
}
const FoodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IFood>("Food", FoodSchema);
