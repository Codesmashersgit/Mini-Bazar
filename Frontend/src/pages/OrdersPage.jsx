import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { orderAPI } from '../services/api';
import { Link, Navigate } from 'react-router-dom';

const OrdersPage = () => {
  const { isLoggedIn, accessToken } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      orderAPI.getMyOrders(accessToken).then(res => {
        if (res.success) setOrders(res.data);
        setLoading(false);
      });
    }
  }, [isLoggedIn, accessToken]);

  if (!isLoggedIn) return <Navigate to="/login" />;

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      
      {loading ? (
        <div className="space-y-4">
          {[1,2,3].map(i => <div key={i} className="h-32 shimmer rounded-lg"></div>)}
        </div>
      ) : orders.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-xl font-bold text-gray-600 mb-4">You haven't placed any orders yet.</h2>
          <Link to="/" className="text-[#ff3f6c] font-bold hover:underline">START SHOPPING</Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.orderId} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition-shadow">
              <div className="bg-gray-50 p-4 border-b flex flex-wrap justify-between items-center gap-4 text-sm">
                <div>
                  <span className="text-gray-500 uppercase tracking-wide text-xs">Order Placed</span><br/>
                  <span className="font-bold">{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase tracking-wide text-xs">Total</span><br/>
                  <span className="font-bold">₹{order.total}</span>
                </div>
                <div>
                  <span className="text-gray-500 uppercase tracking-wide text-xs">Order ID</span><br/>
                  <span className="font-mono">{order.orderId}</span>
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded" />
                    <div>
                      <Link to={`/product/all/${item.productId}`} className="font-bold hover:text-[#ff3f6c] transition-colors">{item.name}</Link>
                      <div className="text-sm text-gray-500 mt-1">Size: {item.size} | Qty: {item.quantity}</div>
                      <div className="font-bold mt-2">₹{item.price * item.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
