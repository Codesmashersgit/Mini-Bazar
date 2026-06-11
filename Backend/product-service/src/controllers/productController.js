import { productsData } from './productsData.js';

// In-memory store
const products = new Map();

// Initialize data
productsData.forEach(p => products.set(p.id, p));

export const getAllProducts = (req, res, next) => {
  try {
    let { category, subCategory, minPrice, maxPrice, sort, search, page = 1, limit = 10 } = req.query;
    
    let result = Array.from(products.values());

    if (category) result = result.filter(p => p.category === category);
    if (subCategory) result = result.filter(p => p.subCategory === subCategory);
    if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
    if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s));
    }

    if (sort) {
      if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
      else if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
      else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    }

    const startIndex = (page - 1) * limit;
    const paginated = result.slice(startIndex, startIndex + Number(limit));

    res.json({
      success: true,
      data: paginated,
      total: result.length,
      page: Number(page),
      limit: Number(limit)
    });
  } catch (error) {
    next(error);
  }
};

export const getProductsByCategory = (req, res, next) => {
  try {
    const { category } = req.params;
    const result = Array.from(products.values()).filter(p => p.category === category);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const getProductById = (req, res, next) => {
  try {
    const product = products.get(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};

export const createProduct = (req, res, next) => {
  try {
    const newProduct = {
      id: `prod_${Date.now()}`,
      ...req.body
    };
    products.set(newProduct.id, newProduct);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!products.has(id)) return res.status(404).json({ success: false, message: 'Product not found' });
    
    const updated = { ...products.get(id), ...req.body };
    products.set(id, updated);
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = (req, res, next) => {
  try {
    const { id } = req.params;
    if (!products.has(id)) return res.status(404).json({ success: false, message: 'Product not found' });
    
    products.delete(id);
    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    next(error);
  }
};
