import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderAPI } from '../services/api';

const CartPage = () => {
  const { cartItems, cartTotal, cartCount, updateQuantity, removeFromCart, clearCart } = useCart();
  const { isLoggedIn, accessToken } = useAuth();

  const handlePlaceOrder = async () => {
    if (!isLoggedIn) {
      alert("Please login to place order");
      return;
    }
    
    try {
      const orderData = {
        items: cartItems.map(i => ({ productId: i.id, name: i.title, price: i.price, quantity: i.qty, size: i.selectedSize, image: i.image })),
        address: { name: 'Test User', phone: '1234567890', street: '123 Main St', city: 'Metro', state: 'Delhi', pincode: '110001' },
        paymentMethod: 'cod',
        subtotal: cartTotal,
        deliveryCharge: cartTotal > 999 ? 0 : 49,
        total: cartTotal + (cartTotal > 999 ? 0 : 49)
      };
      
      const res = await orderAPI.create(accessToken, orderData);
      if (res.success) {
        alert("Order placed successfully!");
        clearCart();
      } else {
        alert("Failed to place order: " + res.message);
      }
    } catch (error) {
      alert("Error placing order");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gray-50">
        <div className="text-8xl mb-6">🛍️</div>
        <h2 className="text-2xl font-bold mb-2">Hey, it feels so light!</h2>
        <p className="text-gray-500 mb-8">There is nothing in your bag. Let's add some items.</p>
        <Link to="/" className="border border-[#ff3f6c] text-[#ff3f6c] px-8 py-3 rounded hover:bg-[#ff3f6c] hover:text-white transition-colors font-bold">ADD ITEMS FROM WISHLIST</Link>
      </div>
    );
  }

  const deliveryFee = cartTotal > 999 ? 0 : 49;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">My Cart ({cartCount} items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white border rounded p-4 mb-4 flex justify-between items-center">
            <div>
              <span className="font-bold">Deliver to: </span> <span className="font-medium">110001</span>
            </div>
            <button className="text-[#ff3f6c] font-bold text-sm">CHANGE</button>
          </div>

          <div className="border rounded">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}`} className={`p-4 flex gap-4 ${index !== cartItems.length - 1 ? 'border-b' : ''}`}>
                <div className="w-24 h-32 bg-gray-100 rounded flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold">{item.brand}</h3>
                      <p className="text-sm text-gray-500 truncate w-48 md:w-auto">{item.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">₹{item.price * item.qty}</p>
                      {item.originalPrice > item.price && (
                        <p className="text-xs text-gray-400 line-through">₹{item.originalPrice * item.qty}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-4">
                    <div className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">Size: {item.selectedSize}</div>
                    
                    <div className="flex items-center border rounded">
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.qty - 1)} className="px-3 hover:text-[#ff3f6c]">-</button>
                      <span className="px-2 text-sm">{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, item.selectedSize, item.qty + 1)} className="px-3 hover:text-[#ff3f6c]">+</button>
                    </div>
                  </div>
                </div>
                
                <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="self-start text-gray-400 hover:text-red-500 text-xl">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary */}
        <div className="w-full lg:w-1/3">
          <div className="border rounded p-6 sticky top-24">
            <h3 className="font-bold uppercase text-sm mb-4">Coupons</h3>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-medium">Apply Coupons</span>
              <button className="border border-[#ff3f6c] text-[#ff3f6c] px-4 py-1 rounded text-xs font-bold">APPLY</button>
            </div>
            
            <hr className="mb-4" />
            
            <h3 className="font-bold uppercase text-sm mb-4">Price Details ({cartCount} Items)</h3>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount on MRP</span>
                <span className="text-green-500">-₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                {deliveryFee === 0 ? <span className="text-green-500">FREE</span> : <span>₹{deliveryFee}</span>}
              </div>
            </div>
            
            <hr className="mb-4" />
            
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total Amount</span>
              <span>₹{cartTotal + deliveryFee}</span>
            </div>
            
            <button 
              onClick={handlePlaceOrder}
              className="w-full bg-[#ff3f6c] text-white py-3 rounded font-bold hover:bg-[#d63060] transition-colors"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
