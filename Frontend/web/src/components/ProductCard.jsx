import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold mb-1">{product.title}</h2>

      {/* Product Description */}
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>

      {/* Product Price */}
      <p className="text-indigo-600 font-bold text-lg mb-3">₹{product.price}</p>

      {/* Add to Cart / Wishlist Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          Add to Cart
        </button>
        <button className="flex-1 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
