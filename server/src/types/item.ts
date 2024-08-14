import { Document } from "mongoose";

type ItemType = Document & {
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

export type { ItemType };
