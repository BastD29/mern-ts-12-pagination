import { Request, Response } from "express";
import Item from "../models/item";
import { DEFAULT_ITEMS } from "../data/data";

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

const getItems = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string);
    // console.log("page:", page);
    const limit = parseInt(req.query.limit as string);
    // console.log("limit:", limit);
    const skip = (page - 1) * limit;
    // console.log("skip:", skip);
    // const items = await Item.find({});
    const items = await Item.find({}).skip(skip).limit(limit);
    // console.log("items:", items);
    const totalItems = await Item.countDocuments({});
    // console.log("totalItems:", totalItems);
    const totalPages = Math.ceil(totalItems / limit);
    // console.log("totalPages:", totalPages);

    // res.status(200).send({ message: "Items retrieved successfully", items });
    res.status(200).send({
      message: "Items retrieved successfully",
      items,
      page,
      totalPages,
      totalItems,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching items" });
  }
};

const seedDB = async (req: Request, res: Response) => {
  try {
    await Item.deleteMany({});
    await Item.insertMany(DEFAULT_ITEMS);

    res.status(201).send({ message: "Database seeded successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error seeding the database" });
  }
};

export { createItem, seedDB, getItems };
