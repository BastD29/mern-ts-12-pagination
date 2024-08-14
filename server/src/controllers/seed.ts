// import { DEFAULT_ITEMS } from "../data/data";
// import { Request, Response } from "express";
// import Item from "../models/item";

// const seedDB = async (req: Request, res: Response) => {
//   try {
//     await Item.deleteMany({});
//     await Item.insertMany(DEFAULT_ITEMS);

//     res.status(201).send({ message: "Database seeded successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Error seeding the database" });
//   }
// };

// export { seedDB };
