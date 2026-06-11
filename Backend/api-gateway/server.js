import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const serviceName = process.env.SERVICE_NAME || 'API Gateway';

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(morgan('dev'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { success: false, message: 'Too many requests, please try again later.' }
});
app.use(limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({
    service: serviceName,
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

// Proxy routes
const authProxy = createProxyMiddleware({ target: process.env.AUTH_SERVICE_URL || 'http://localhost:4001', changeOrigin: true, pathRewrite: {'^/api/auth': '/api/auth'} });
const productProxy = createProxyMiddleware({ target: process.env.PRODUCT_SERVICE_URL || 'http://localhost:4002', changeOrigin: true, pathRewrite: {'^/api/products': '/api/products'} });
const cartProxy = createProxyMiddleware({ target: process.env.CART_SERVICE_URL || 'http://localhost:4003', changeOrigin: true, pathRewrite: {'^/api/cart': '/api/cart'} });
const orderProxy = createProxyMiddleware({ target: process.env.ORDER_SERVICE_URL || 'http://localhost:4004', changeOrigin: true, pathRewrite: {'^/api/orders': '/api/orders'} });
const wishlistProxy = createProxyMiddleware({ target: process.env.WISHLIST_SERVICE_URL || 'http://localhost:4005', changeOrigin: true, pathRewrite: {'^/api/wishlist': '/api/wishlist'} });

app.use('/api/auth', authProxy);
app.use('/api/products', productProxy);
app.use('/api/cart', cartProxy);
app.use('/api/orders', orderProxy);
app.use('/api/wishlist', wishlistProxy);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(503).json({ success: false, message: 'Service Unavailable' });
});

app.listen(PORT, () => {
  console.log(`${serviceName} running on port ${PORT}`);
});
