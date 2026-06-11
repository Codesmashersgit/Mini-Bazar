import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(product.id);
  const inCart = isInCart(product.id);

  const handleCartClick = (e) => {
    if (!inCart) {
      e.preventDefault();
      addToCart(product, product.sizes[0], 1);
    }
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  return (
    <Link to={`/product/${product.category}/${product.id}`} className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative">
      <div className="relative overflow-hidden h-64 bg-gray-100">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        
        {/* Badges */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-[#ff3f6c] text-white text-[10px] font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
        
        {/* Wishlist Button */}
        <button 
          onClick={handleWishlistClick}
          className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          {wishlisted ? <FaHeart className="text-[#ff3f6c]" /> : <FaRegHeart className="text-gray-500" />}
        </button>

        {/* Rating */}
        <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded flex items-center gap-1 text-xs font-semibold">
          {product.rating} <FaStar className="text-green-500 text-[10px]" /> | {product.reviews}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wide mb-1">{product.brand}</h3>
        <h2 className="text-gray-800 text-sm font-medium truncate mb-2">{product.title}</h2>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {inCart ? (
          <div className="w-full bg-green-500 text-white text-center py-2 rounded font-medium text-sm">
            Added to Cart
          </div>
        ) : (
          <button 
            onClick={handleCartClick}
            className="w-full border border-gray-200 text-[#ff3f6c] group-hover:bg-[#ff3f6c] group-hover:text-white py-2 rounded font-medium text-sm transition-colors"
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
