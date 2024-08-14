import { Request, Response } from "express";
import Item from "../models/item";

const createItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.create({
      name: req.body.name,
      price: req.body.price,
    });

    res.status(201).send({ message: "Item created with success", item });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating item" });
  }
};

export { createItem };
