import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { users } from "./authControllers.js";

// Get user profile
export const getProfile = async (req, res, next) => {
  try {
    const user = users.get(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword
    });
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const user = users.get(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const { firstName, lastName, phone, email } = req.body;

    // Check if email is being changed and if it's already taken
    if (email && email !== user.email) {
      const existingUser = Array.from(users.values()).find(
        u => u.email === email && u.userId !== user.userId
      );
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Email already in use"
        });
      }
      user.email = email;
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phone !== undefined) user.phone = phone;

    user.updatedAt = new Date().toISOString();
    users.set(user.userId, user);

    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: userWithoutPassword
    });
  } catch (error) {
    next(error);
  }
};

// Change password
export const changePassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { currentPassword, newPassword } = req.body;

    const user = users.get(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect"
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    user.updatedAt = new Date().toISOString();
    users.set(user.userId, user);

    res.json({
      success: true,
      message: "Password changed successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Delete account
export const deleteAccount = async (req, res, next) => {
  try {
    const user = users.get(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Soft delete (mark as inactive)
    user.isActive = false;
    user.updatedAt = new Date().toISOString();
    users.set(user.userId, user);

    // Or hard delete: users.delete(req.user.userId);

    res.json({
      success: true,
      message: "Account deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Get all users (Admin only)
export const getAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = "", role = "" } = req.query;

    let userList = Array.from(users.values());

    // Filter by search
    if (search) {
      const searchLower = search.toLowerCase();
      userList = userList.filter(
        u =>
          u.email.toLowerCase().includes(searchLower) ||
          u.firstName.toLowerCase().includes(searchLower) ||
          u.lastName.toLowerCase().includes(searchLower)
      );
    }

    // Filter by role
    if (role) {
      userList = userList.filter(u => u.role === role);
    }

    // Pagination
    const startIndex = (parseInt(page) - 1) * parseInt(limit);
    const endIndex = startIndex + parseInt(limit);
    const paginatedUsers = userList.slice(startIndex, endIndex);

    // Remove passwords
    const usersWithoutPasswords = paginatedUsers.map(({ password, ...user }) => user);

    res.json({
      success: true,
      data: {
        users: usersWithoutPasswords,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: userList.length,
          totalPages: Math.ceil(userList.length / parseInt(limit))
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get user by ID (Admin only)
export const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = users.get(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword
    });
  } catch (error) {
    next(error);
  }
};