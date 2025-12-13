import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import { errorHandler } from "./src/middlewares/errorhandler.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const serviceName = process.env.SERVICE_NAME || "Auth Service";
const PORT = process.env.PORT || 3001;

// Health check route
app.get("/", (req, res) => {
  res.json({
    service: serviceName,
    status: "running",
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`${serviceName} running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}`);
  console.log(`Auth API: http://localhost:${PORT}/api/auth`);
  console.log(`User API: http://localhost:${PORT}/api/users`);
});

export default app;