import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const serviceName = process.env.SERVICE_NAME || "Unknown Service";

app.get("/", (req, res) => {
  res.send(`${serviceName} running...`);
});

app.listen(process.env.PORT, () => {
  console.log(`${serviceName} running on port ${process.env.PORT}`);
});
