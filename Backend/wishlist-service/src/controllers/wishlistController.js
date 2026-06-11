const wishlists = new Map();

export const getWishlist = (req, res, next) => {
  try {
    const userId = req.user.userId;
    const items = wishlists.get(userId) || new Set();
    res.json({ success: true, data: Array.from(items) });
  } catch (error) {
    next(error);
  }
};

export const addToWishlist = (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.body;
    
    if (!productId) return res.status(400).json({ success: false, message: 'Product ID required' });
    
    let items = wishlists.get(userId);
    if (!items) {
      items = new Set();
      wishlists.set(userId, items);
    }
    
    items.add(productId);
    res.status(201).json({ success: true, message: 'Added to wishlist', data: Array.from(items) });
  } catch (error) {
    next(error);
  }
};

export const removeFromWishlist = (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.params;
    
    const items = wishlists.get(userId);
    if (items) {
      items.delete(productId);
    }
    res.json({ success: true, message: 'Removed from wishlist', data: items ? Array.from(items) : [] });
  } catch (error) {
    next(error);
  }
};

export const checkWishlist = (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { productId } = req.params;
    
    const items = wishlists.get(userId);
    const isWishlisted = items ? items.has(productId) : false;
    res.json({ success: true, data: { isWishlisted } });
  } catch (error) {
    next(error);
  }
};

export const clearWishlist = (req, res, next) => {
  try {
    const userId = req.user.userId;
    wishlists.delete(userId);
    res.json({ success: true, message: 'Wishlist cleared' });
  } catch (error) {
    next(error);
  }
};
