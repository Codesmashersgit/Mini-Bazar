import { products } from "../models/productModel.js";

export const getClothes = () => {
  return products.filter(p => p.name.toLowerCase().includes("shirt") || p.name.toLowerCase().includes("jeans"));
};
