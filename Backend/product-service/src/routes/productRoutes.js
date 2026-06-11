import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductsByCategory } from '../controllers/productController.js';
import { authenticate, authorize } from '../middlewares/authenticate.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);
router.post('/', authenticate, authorize('admin'), createProduct);
router.put('/:id', authenticate, authorize('admin'), updateProduct);
router.delete('/:id', authenticate, authorize('admin'), deleteProduct);

export default router;
