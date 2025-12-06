import express from "express";
import { fetchClothes } from "../controllers/productController.js";

const router = express.Router();

router.get("/clothes", fetchClothes);

export default router;
