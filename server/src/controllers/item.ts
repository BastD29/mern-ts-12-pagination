import { Request, Response } from "express";
import Item from "../models/item";

const createItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      inStock: req.body.inStock,
    });

    res.status(201).send({ message: "Item created with success", item });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating item" });
  }
};

export { createItem };
