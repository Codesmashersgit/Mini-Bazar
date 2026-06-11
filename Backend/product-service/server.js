import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './src/routes/productRoutes.js';
import { errorHandler } from './src/middlewares/errorhandler.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const serviceName = process.env.SERVICE_NAME || 'Product Service';
const PORT = process.env.PORT || 4002;

app.get('/', (req, res) => res.json({ service: serviceName, status: 'running', timestamp: new Date().toISOString() }));
app.use('/api/products', productRoutes);
app.use(errorHandler);
app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));

app.listen(PORT, () => console.log(`${serviceName} running on port ${PORT}`));
export default app;
