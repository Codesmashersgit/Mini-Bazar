import axios from "axios";

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://localhost:3001";

export const authenticate = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access token is required"
      });
    }

    const token = authHeader.substring(7); // Remove "Bearer " prefix

    // Verify token with Auth Service
    try {
      const response = await axios.post(
        `${AUTH_SERVICE_URL}/api/auth/verify-token`,
        { token },
        { timeout: 5000 } // 5 second timeout
      );

      // Attach user info to request
      req.user = response.data.data;
      next();
    } catch (authError) {
      if (authError.response) {
        return res.status(authError.response.status).json({
          success: false,
          message: authError.response.data.message || "Authentication failed"
        });
      }

      // Auth service unavailable
      return res.status(503).json({
        success: false,
        message: "Authentication service unavailable"
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Authentication failed"
    });
  }
};