import { Document } from "mongoose";

type ItemType = Document & {
  name: string;
  description: string;
  price: number;
};

export type { ItemType };
