import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import crypto from "crypto";

// In-memory storage (replace with database in production)
const users = new Map();
const refreshTokens = new Map();
const resetTokens = new Map();

// Helper to generate user ID
const generateUserId = () => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Helper to generate JWT tokens
const generateAccessToken = (userId, email, role) => {
  return jwt.sign(
    { userId, email, role },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: process.env.JWT_EXPIRES_IN || "15m" }
  );
};

const generateRefreshToken = (userId) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key",
    { expiresIn: "7d" }
  );
  return token;
};

// Register new user
export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { email, password, firstName, lastName, phone, role = "customer" } = req.body;

    // Check if user already exists
    const existingUser = Array.from(users.values()).find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const userId = generateUserId();
    const newUser = {
      userId,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone: phone || null,
      role: role === "admin" ? "admin" : "customer", // Only allow admin role if explicitly set
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    users.set(userId, newUser);

    // Generate tokens
    const accessToken = generateAccessToken(userId, email, newUser.role);
    const refreshToken = generateRefreshToken(userId);
    
    refreshTokens.set(refreshToken, {
      userId,
      createdAt: new Date().toISOString()
    });

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: userWithoutPassword,
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    next(error);
  }
};

// Login user
export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Find user by email
    const user = Array.from(users.values()).find(u => u.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Account has been deactivated"
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate tokens
    const accessToken = generateAccessToken(user.userId, user.email, user.role);
    const refreshToken = generateRefreshToken(user.userId);
    
    refreshTokens.set(refreshToken, {
      userId: user.userId,
      createdAt: new Date().toISOString()
    });

    // Update last login
    user.lastLogin = new Date().toISOString();
    users.set(user.userId, user);

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: "Login successful",
      data: {
        user: userWithoutPassword,
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    next(error);
  }
};

// Refresh access token
export const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token is required"
      });
    }

    // Verify refresh token exists
    const tokenData = refreshTokens.get(refreshToken);
    if (!tokenData) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token"
      });
    }

    // Verify JWT
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key"
    );

    const user = users.get(decoded.userId);
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: "User not found or inactive"
      });
    }

    // Generate new access token
    const accessToken = generateAccessToken(user.userId, user.email, user.role);

    res.json({
      success: true,
      message: "Token refreshed successfully",
      data: { accessToken }
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired refresh token"
      });
    }
    next(error);
  }
};

// Logout user
export const logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      refreshTokens.delete(refreshToken);
    }

    res.json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Forgot password
export const forgotPassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { email } = req.body;

    const user = Array.from(users.values()).find(u => u.email === email);
    
    // Always return success for security (don't reveal if email exists)
    if (!user) {
      return res.json({
        success: true,
        message: "If the email exists, a password reset link has been sent"
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    resetTokens.set(resetToken, {
      userId: user.userId,
      expiresAt: Date.now() + 3600000 // 1 hour
    });

    // In production, send email with reset link
    console.log(`Reset token for ${email}: ${resetToken}`);
    console.log(`Reset link: http://localhost:3000/reset-password?token=${resetToken}`);

    res.json({
      success: true,
      message: "If the email exists, a password reset link has been sent",
      // Remove this in production
      devOnly: { resetToken }
    });
  } catch (error) {
    next(error);
  }
};

// Reset password
export const resetPassword = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array()
      });
    }

    const { token, newPassword } = req.body;

    const resetData = resetTokens.get(token);
    if (!resetData) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired reset token"
      });
    }

    if (Date.now() > resetData.expiresAt) {
      resetTokens.delete(token);
      return res.status(400).json({
        success: false,
        message: "Reset token has expired"
      });
    }

    const user = users.get(resetData.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    user.updatedAt = new Date().toISOString();
    users.set(user.userId, user);

    // Delete reset token
    resetTokens.delete(token);

    // Invalidate all refresh tokens for security
    const tokensToDelete = [];
    for (const [token, data] of refreshTokens.entries()) {
      if (data.userId === user.userId) {
        tokensToDelete.push(token);
      }
    }
    tokensToDelete.forEach(token => refreshTokens.delete(token));

    res.json({
      success: true,
      message: "Password reset successfully"
    });
  } catch (error) {
    next(error);
  }
};

// Export users for other controllers (remove in production with DB)
export { users, refreshTokens };