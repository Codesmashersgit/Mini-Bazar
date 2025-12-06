import { getClothes } from "../services/productService.js";

export const fetchClothes = (req, res) => {
  const clothes = getClothes();
  res.json(clothes);
};
