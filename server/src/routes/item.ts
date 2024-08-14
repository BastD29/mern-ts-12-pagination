import express from "express";
import { createItem } from "../controllers/item";

const router = express.Router();

router.post("/", createItem);

export default router;
