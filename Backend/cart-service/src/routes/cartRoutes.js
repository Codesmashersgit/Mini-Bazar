import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartSummary
} from "../controllers/cartController.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

// All cart routes now require authentication
router.use(authenticate);

// Get user's cart (now uses authenticated user ID)
router.get("/", getCart);

// Get cart summary (total items, total price)
router.get("/summary", getCartSummary);

// Add item to cart
router.post("/items", addToCart);

// Update cart item quantity
router.put("/items/:productId", updateCartItem);

// Remove item from cart
router.delete("/items/:productId", removeFromCart);

// Clear entire cart
router.delete("/", clearCart);

export default router;