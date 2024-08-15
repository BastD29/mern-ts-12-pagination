import express from "express";
import { createItem, getItems, seedDB } from "../controllers/item2";

const router = express.Router();

router.post("/create", createItem);
router.post("/seed", seedDB);
router.get("/", getItems);

export default router;
