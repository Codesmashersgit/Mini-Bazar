import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/data';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  const { category, id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="bg-[#ff3f6c] text-white px-6 py-2 rounded">Go Back</Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <div className="text-sm text-gray-500 mb-6">Home / {category} / {product.title}</div>
      
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        {/* Left: Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="h-[500px] bg-gray-100 rounded-xl overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-24 h-24 bg-gray-100 rounded cursor-pointer border-2 hover:border-[#ff3f6c]">
                <img src={product.image} className="w-full h-full object-cover opacity-80 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg text-gray-500 font-bold uppercase tracking-wide mb-1">{product.brand}</h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="border border-gray-300 px-3 py-1 rounded flex items-center gap-2 font-bold">
              {product.rating} <span className="text-green-500">★</span> | {product.reviews} Ratings
            </div>
          </div>

          <div className="border-t border-gray-200 py-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">MRP ₹{product.originalPrice}</span>
                  <span className="text-xl font-bold text-orange-500">({product.discount}% OFF)</span>
                </>
              )}
            </div>
            <p className="text-green-600 text-sm font-bold">inclusive of all taxes</p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-4 uppercase text-sm">Select Size</h3>
            <div className="flex flex-wrap gap-4">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all ${selectedSize === size ? 'border-[#ff3f6c] text-[#ff3f6c]' : 'border-gray-300 text-gray-700 hover:border-[#ff3f6c]'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded">
              <button onClick={() => setQty(Math.max(1, qty-1))} className="px-4 py-3 font-bold text-xl hover:text-[#ff3f6c]">-</button>
              <span className="px-4 font-bold">{qty}</span>
              <button onClick={() => setQty(qty+1)} className="px-4 py-3 font-bold text-xl hover:text-[#ff3f6c]">+</button>
            </div>
            
            <button 
              onClick={() => addToCart(product, selectedSize, qty)}
              className="flex-1 bg-[#ff3f6c] text-white font-bold py-3 rounded hover:bg-[#d63060] transition-colors flex items-center justify-center gap-2"
            >
              🛍️ ADD TO BAG
            </button>
            
            <button 
              onClick={() => toggleWishlist(product)}
              className={`px-6 py-3 rounded border font-bold flex items-center justify-center gap-2 transition-colors ${wishlisted ? 'border-[#ff3f6c] text-[#ff3f6c] bg-pink-50' : 'border-gray-300 hover:border-gray-900'}`}
            >
              {wishlisted ? '❤️ WISHLISTED' : '🤍 WISHLIST'}
            </button>
          </div>

          <div className="border-t border-gray-200 py-6">
            <h3 className="font-bold mb-4 uppercase text-sm flex items-center gap-2">🚚 Delivery Options</h3>
            <p className="text-gray-600 mb-2">100% Original Products</p>
            <p className="text-gray-600 mb-2">Pay on delivery might be available</p>
            <p className="text-gray-600 mb-2">Easy 14 days returns and exchanges</p>
          </div>
          
          <div className="border-t border-gray-200 py-6">
            <h3 className="font-bold mb-4 uppercase text-sm">Product Details</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}. Made with premium quality material to give you the best comfort and style.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-200 py-16">
          <h2 className="text-2xl font-bold mb-8 uppercase text-center">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
