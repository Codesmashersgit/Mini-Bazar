import express from "express";
import { body } from "express-validator";
import {
  getProfile,
  updateProfile,
  changePassword,
  deleteAccount,
  getAllUsers,
  getUserById
} from "../controllers/userControllers.js";
import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

// All user routes require authentication
router.use(authenticate);

const updateProfileValidation = [
  body("firstName").optional().trim().notEmpty().withMessage("First name cannot be empty"),
  body("lastName").optional().trim().notEmpty().withMessage("Last name cannot be empty"),
  body("phone").optional().isMobilePhone().withMessage("Valid phone number required"),
  body("email").optional().isEmail().normalizeEmail().withMessage("Valid email is required")
];

const changePasswordValidation = [
  body("currentPassword").notEmpty().withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters long")
];

// User profile routes
router.get("/profile", getProfile);
router.put("/profile", updateProfileValidation, updateProfile);
router.post("/change-password", changePasswordValidation, changePassword);
router.delete("/account", deleteAccount);

// Admin routes
router.get("/", authorize("admin"), getAllUsers);
router.get("/:userId", authorize("admin"), getUserById);

export default router;