import express from "express";
import { seedDB } from "../controllers/seed";

const router = express.Router();

router.post("/seed", seedDB);

export default router;
