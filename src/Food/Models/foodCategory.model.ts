import mongoose, { Schema, Document } from "mongoose";

export interface IFoodCategory extends Document {
  categoryName: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const FoodCategorySchema: Schema = new Schema(
  {
    categoryName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<IFoodCategory>(
  "FoodCategory",
  FoodCategorySchema
);
