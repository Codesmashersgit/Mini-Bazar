const Product = require('../models/productModel');

const getAllProducts = async () => {
    return await Product.find({});
};

const createProduct = async (data) => {
    const product = new Product(data);
    return await product.save();
};

module.exports = { getAllProducts, createProduct };
