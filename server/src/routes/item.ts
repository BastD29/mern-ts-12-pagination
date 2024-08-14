import express from "express";
import { createItem, getItems, seedDB } from "../controllers/item";

const router = express.Router();

router.post("/create", createItem);
router.post("/seed", seedDB);
router.get("/", getItems);

export default router;
