import express from "express";
import { body } from "express-validator";
import {
  register,
  login,
  refreshToken,
  logout,
  forgotPassword,
  resetPassword
} from "../controllers/authControllers.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

// Validation rules
const registerValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("phone").optional().isMobilePhone().withMessage("Valid phone number required")
];

const loginValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required")
];

const forgotPasswordValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required")
];

const resetPasswordValidation = [
  body("token").notEmpty().withMessage("Reset token is required"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
];

// Public routes
router.post("/register", registerValidation, register);
router.post("/login", loginValidation, login);
router.post("/refresh-token", refreshToken);
router.post("/forgot-password", forgotPasswordValidation, forgotPassword);
router.post("/reset-password", resetPasswordValidation, resetPassword);

// Protected routes
router.post("/logout", authenticate, logout);

export default router;