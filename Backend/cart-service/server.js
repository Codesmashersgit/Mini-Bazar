import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cartRoutes from "./src/routes/cartRoutes.js";
import { errorHandler } from "./src/middlewares/errorhandler.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const serviceName = process.env.SERVICE_NAME || "Cart Service";
const PORT = process.env.PORT || 3003;

// Health check route
app.get("/", (req, res) => {
  res.json({
    service: serviceName,
    status: "running",
    timestamp: new Date().toISOString()
  });
});

// Cart routes (now with authentication)
app.use("/api/cart", cartRoutes);

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
  console.log(`Cart API: http://localhost:${PORT}/api/cart`);
});

export default app;