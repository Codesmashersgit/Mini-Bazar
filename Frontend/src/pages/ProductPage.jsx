import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/data';

const ProductPage = () => {
  const { type } = useParams();
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('newest');
  
  const categoryProducts = products.filter(p => p.category === type);
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [type]);

  let displayProducts = [...categoryProducts];
  if (sortBy === 'price_asc') displayProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price_desc') displayProducts.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') displayProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      {/* Breadcrumbs & Header */}
      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-2">Home / {type?.toUpperCase()}</div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase">{type} Clothing</h1>
          <div className="flex gap-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2 rounded outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="border rounded p-4 mb-4">
            <h3 className="font-bold mb-4 uppercase text-sm">Filters</h3>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Price</h4>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" id="p1" className="accent-[#ff3f6c]" /> <label htmlFor="p1">Under ₹999</label>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <input type="checkbox" id="p2" className="accent-[#ff3f6c]" /> <label htmlFor="p2">₹1000 - ₹1999</label>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Sizes</h4>
              <div className="flex flex-wrap gap-2">
                {['XS','S','M','L','XL','XXL'].map(size => (
                  <button key={size} className="border w-10 h-10 rounded text-sm hover:border-[#ff3f6c] hover:text-[#ff3f6c]">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-80 shimmer rounded-xl"></div>
              ))}
            </div>
          ) : (
            <>
              {displayProducts.length === 0 ? (
                <div className="text-center py-20">
                  <h2 className="text-xl text-gray-500">No products found for this category.</h2>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {displayProducts.map(p => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
