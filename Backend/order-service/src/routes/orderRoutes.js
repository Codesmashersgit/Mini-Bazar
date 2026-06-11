import express from 'express';
import { createOrder, getUserOrders, getOrderById, updateOrderStatus, cancelOrder } from '../controllers/orderController.js';
import { authenticate, authorize } from '../middlewares/authenticate.js';

const router = express.Router();

router.use(authenticate);

router.post('/', createOrder);
router.get('/', getUserOrders);
router.get('/:orderId', getOrderById);
router.put('/:orderId/status', authorize('admin'), updateOrderStatus);
router.put('/:orderId/cancel', cancelOrder);

export default router;
