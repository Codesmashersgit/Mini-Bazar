import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCartSummary
} from "../controllers/cartController.js"

const router = express.Router();

// Get user's cart
router.get("/:userId", getCart);

// Get cart summary (total items, total price)
router.get("/:userId/summary", getCartSummary);

// Add item to cart
router.post("/:userId/items", addToCart);

// Update cart item quantity
router.put("/:userId/items/:productId", updateCartItem);

// Remove item from cart
router.delete("/:userId/items/:productId", removeFromCart);

// Clear entire cart
router.delete("/:userId", clearCart);

export default router;