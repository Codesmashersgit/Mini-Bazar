import express from "express";
import dotenv from "dotenv";
import productRoutes from "./src/routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use("/products", productRoutes);

const serviceName = process.env.SERVICE_NAME || "product-service";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${serviceName} running on port ${PORT}`);
});
