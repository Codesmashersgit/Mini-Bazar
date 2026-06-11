import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
          <div className="text-6xl mb-4">💝</div>
          <h2 className="text-2xl font-bold mb-2">PLEASE LOG IN</h2>
          <p className="text-gray-500 mb-8">Login to view items in your wishlist.</p>
          <Link to="/login" className="block w-full border border-[#ff3f6c] text-[#ff3f6c] font-bold py-3 rounded hover:bg-[#ff3f6c] hover:text-white transition-colors">LOGIN</Link>
        </div>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-2">YOUR WISHLIST IS EMPTY</h2>
        <p className="text-gray-500 mb-8">Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
        <Link to="/" className="border border-[#ff3f6c] text-[#ff3f6c] px-8 py-3 rounded hover:bg-[#ff3f6c] hover:text-white transition-colors font-bold">CONTINUE SHOPPING</Link>
      </div>
    );
  }

  const moveToCart = (product) => {
    addToCart(product, product.sizes[0] || 'Standard', 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16 min-h-screen">
      <h1 className="text-xl font-bold mb-8">My Wishlist <span className="font-normal text-gray-500 text-lg">{wishlistItems.length} items</span></h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="border rounded overflow-hidden group relative">
            <div className="h-56 bg-gray-100 relative">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-3">
              <p className="text-sm truncate mb-1">{item.title}</p>
              <div className="flex gap-2 items-center mb-3">
                <span className="font-bold">₹{item.price}</span>
                {item.originalPrice > item.price && <span className="text-xs text-gray-400 line-through">₹{item.originalPrice}</span>}
              </div>
              <button 
                onClick={() => moveToCart(item)}
                className="w-full text-[#ff3f6c] font-bold text-sm py-2 border-t hover:bg-gray-50"
              >
                MOVE TO BAG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
