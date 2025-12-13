import axios from "axios";

// In-memory cart storage (replace with database in production)
const carts = new Map();

// Product service URL (configure in .env)
const PRODUCT_SERVICE_URL = process.env.PRODUCT_SERVICE_URL || "http://localhost:4007";

// Helper function to fetch product details
const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Product not found: ${productId}`);
  }
};

// Helper function to calculate cart totals
const calculateCartTotals = (cartItems) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    totalItems,
    tax: parseFloat((subtotal * 0.1).toFixed(2)), // 10% tax
    total: parseFloat((subtotal * 1.1).toFixed(2))
  };
};

// Get user's cart
export const getCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required"
      });
    }

    const userCart = carts.get(userId) || { items: [] };
    const totals = calculateCartTotals(userCart.items);

    res.json({
      success: true,
      data: {
        userId,
        items: userCart.items,
        ...totals,
        updatedAt: userCart.updatedAt || new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get cart summary
export const getCartSummary = async (req, res, next) => {
  try {
    const { userId } = req.params;
    
    const userCart = carts.get(userId) || { items: [] };
    const totals = calculateCartTotals(userCart.items);

    res.json({
      success: true,
      data: {
        userId,
        ...totals
      }
    });
  } catch (error) {
    next(error);
  }
};

// Add item to cart
export const addToCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required"
      });
    }

    if (quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1"
      });
    }

    // Fetch product details
    const product = await getProductDetails(productId);

    // Check stock availability
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Only ${product.stock} items available`
      });
    }

    // Get or create user cart
    let userCart = carts.get(userId) || { items: [] };

    // Check if product already exists in cart
    const existingItemIndex = userCart.items.findIndex(
      item => item.productId === productId
    );

    if (existingItemIndex > -1) {
      // Update quantity
      const newQuantity = userCart.items[existingItemIndex].quantity + quantity;
      
      if (product.stock < newQuantity) {
        return res.status(400).json({
          success: false,
          message: `Cannot add more. Only ${product.stock} items available`
        });
      }

      userCart.items[existingItemIndex].quantity = newQuantity;
    } else {
      // Add new item
      userCart.items.push({
        productId,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image || null
      });
    }

    userCart.updatedAt = new Date().toISOString();
    carts.set(userId, userCart);

    const totals = calculateCartTotals(userCart.items);

    res.status(201).json({
      success: true,
      message: "Item added to cart",
      data: {
        userId,
        items: userCart.items,
        ...totals
      }
    });
  } catch (error) {
    next(error);
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res, next) => {
  try {
    const { userId, productId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required (minimum 1)"
      });
    }

    const userCart = carts.get(userId);

    if (!userCart || userCart.items.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart is empty"
      });
    }

    const itemIndex = userCart.items.findIndex(
      item => item.productId === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart"
      });
    }

    // Verify stock availability
    const product = await getProductDetails(productId);
    
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Only ${product.stock} items available`
      });
    }

    userCart.items[itemIndex].quantity = quantity;
    userCart.items[itemIndex].price = product.price; // Update price if changed
    userCart.updatedAt = new Date().toISOString();
    
    carts.set(userId, userCart);

    const totals = calculateCartTotals(userCart.items);

    res.json({
      success: true,
      message: "Cart item updated",
      data: {
        userId,
        items: userCart.items,
        ...totals
      }
    });
  } catch (error) {
    next(error);
  }
};

// Remove item from cart
export const removeFromCart = async (req, res, next) => {
  try {
    const { userId, productId } = req.params;

    const userCart = carts.get(userId);

    if (!userCart || userCart.items.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart is empty"
      });
    }

    const initialLength = userCart.items.length;
    userCart.items = userCart.items.filter(item => item.productId !== productId);

    if (userCart.items.length === initialLength) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart"
      });
    }

    userCart.updatedAt = new Date().toISOString();
    carts.set(userId, userCart);

    const totals = calculateCartTotals(userCart.items);

    res.json({
      success: true,
      message: "Item removed from cart",
      data: {
        userId,
        items: userCart.items,
        ...totals
      }
    });
  } catch (error) {
    next(error);
  }
};

// Clear entire cart
export const clearCart = async (req, res, next) => {
  try {
    const { userId } = req.params;

    carts.delete(userId);

    res.json({
      success: true,
      message: "Cart cleared successfully",
      data: {
        userId,
        items: [],
        subtotal: 0,
        totalItems: 0,
        tax: 0,
        total: 0
      }
    });
  } catch (error) {
    next(error);
  }
};