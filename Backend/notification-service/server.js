import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const serviceName = process.env.SERVICE_NAME || "Unknown Service";

app.get("/", (req, res) => {
  res.send(`${serviceName} running...`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${serviceName} running on port ${PORT}`);
});
