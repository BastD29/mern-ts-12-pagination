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
    const page = req.query.page as string;
    const limit = req.query.limit as string;
    const name = req.query.name as string;
    const category = req.query.category as string;
    const minPrice = req.query.minPrice as string;
    const maxPrice = req.query.maxPrice as string;
    const inStock = req.query.inStock as string;

    const filter: {
      name?: { $regex: string; $options: string };
      category?: string;
      price?: { $gte?: number; $lte?: number };
      inStock?: boolean;
    } = {};

    if (typeof name === "string") {
      filter.name = { $regex: name, $options: "i" }; // Case-insensitive regex search
    }

    if (typeof category === "string") {
      filter.category = category;
    }

    if (typeof minPrice === "string") {
      filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
    }

    if (typeof maxPrice === "string") {
      filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
    }

    if (typeof inStock === "string") {
      filter.inStock = inStock === "true"; // Convert to boolean
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const items = await Item.find(filter).skip(skip).limit(parseInt(limit));
    const totalItems = await Item.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / parseInt(limit));

    res.status(200).send({
      message: "Items retrieved successfully",
      items,
      page: parseInt(page),
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
