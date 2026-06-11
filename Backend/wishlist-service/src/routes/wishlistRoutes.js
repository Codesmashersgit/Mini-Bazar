import express from 'express';
import { getWishlist, addToWishlist, removeFromWishlist, checkWishlist, clearWishlist } from '../controllers/wishlistController.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = express.Router();
router.use(authenticate);

router.get('/', getWishlist);
router.post('/items', addToWishlist);
router.delete('/items/:productId', removeFromWishlist);
router.get('/items/:productId', checkWishlist);
router.delete('/', clearWishlist);

export default router;
