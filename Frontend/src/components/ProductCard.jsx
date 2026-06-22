import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);

  const wishlisted = isWishlisted(product.id);
  const inCart = isInCart(product.id);

  const handleCartClick = (e) => {
    e.preventDefault();
    if (!inCart) {
      addToCart(product, product.sizes?.[0] || 'M', 1);
    }
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    toggleWishlist(product);
  };

  const originalPrice = product.originalPrice || Math.round(product.price * 1.5);
  const discount = product.discount || Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <div 
      className="group block bg-white transition-all duration-300 relative w-full hover:shadow-lg border border-transparent hover:border-gray-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.category || 'all'}/${product.id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
          />
          
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-white/90 text-brand-pink text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider backdrop-blur-sm shadow-sm border border-gray-100">
              {discount}% OFF
            </div>
          )}
          
          <button 
            onClick={handleWishlistClick}
            className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:scale-110 transition-transform duration-200 z-10 border border-gray-100"
            aria-label="Wishlist"
          >
            {wishlisted ? <FaHeart className="text-brand-pink" /> : <FaRegHeart className="text-gray-400 hover:text-gray-600" />}
          </button>

          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-1.5 py-0.5 flex items-center gap-1 text-[11px] font-bold text-gray-800 shadow-sm border border-gray-100">
            {product.rating || "4.5"} <FaStar className="text-green-500 text-[10px]" /> <span className="text-gray-300 font-normal mx-0.5">|</span> {product.reviews || "100"}
          </div>

          <div className={`hidden md:block absolute bottom-0 left-0 w-full p-2 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button 
              onClick={handleCartClick}
              className={`w-full py-2.5 font-bold text-sm transition-colors uppercase tracking-wider border ${inCart ? 'bg-green-500 text-white border-green-500 cursor-default' : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'}`}
            >
              {inCart ? 'ADDED' : 'ADD TO BAG'}
            </button>
          </div>
        </div>

        <div className="pt-3 px-2 pb-3">
          <h3 className="text-gray-900 text-sm font-bold uppercase tracking-wide truncate mb-1">{product.brand || 'Brand'}</h3>
          <h2 className="text-gray-500 text-sm truncate font-normal mb-1.5">{product.title}</h2>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-900">Rs. {product.price}</span>
            {originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">Rs. {originalPrice}</span>
            )}
            {discount > 0 && (
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wide">({discount}% OFF)</span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="mt-1 mb-2 px-2 md:hidden">
         <button 
            onClick={handleCartClick}
            className={`w-full py-2 border font-bold text-xs uppercase tracking-wider transition-colors ${inCart ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 text-brand-pink hover:border-brand-pink'}`}
          >
            {inCart ? 'Added' : 'Add to Bag'}
          </button>
      </div>
    </div>
  );
};

export default ProductCard;
