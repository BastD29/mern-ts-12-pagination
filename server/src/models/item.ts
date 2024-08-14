import { Schema, model } from "mongoose";
import { ItemType } from "../types/item";

const itemSchema = new Schema<ItemType>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

export default model<ItemType>("Item", itemSchema);
