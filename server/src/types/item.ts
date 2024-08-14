import { Document } from "mongoose";

type ItemType = Document & {
  name: string;
  price: number;
};

export type { ItemType };
