import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { products } from '../data/data';

const AdminPage = () => {
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn || user?.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">🚫</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-500">You do not have permission to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r min-h-[calc(100vh-80px)] p-4 hidden md:block">
        <h2 className="font-bold text-gray-400 uppercase tracking-wider text-sm mb-6">Menu</h2>
        <ul className="space-y-2">
          <li className="bg-pink-50 text-[#ff3f6c] font-bold px-4 py-3 rounded cursor-pointer border-l-4 border-[#ff3f6c]">Dashboard</li>
          <li className="px-4 py-3 rounded cursor-pointer hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent">Products</li>
          <li className="px-4 py-3 rounded cursor-pointer hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent">Orders</li>
          <li className="px-4 py-3 rounded cursor-pointer hover:bg-gray-50 text-gray-600 font-medium border-l-4 border-transparent">Users</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-sm font-bold uppercase mb-2">Total Products</div>
            <div className="text-3xl font-bold text-gray-800">{products.length}</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-sm font-bold uppercase mb-2">Total Orders</div>
            <div className="text-3xl font-bold text-gray-800">0</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-sm font-bold uppercase mb-2">Total Users</div>
            <div className="text-3xl font-bold text-gray-800">1</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-gray-400 text-sm font-bold uppercase mb-2">Revenue</div>
            <div className="text-3xl font-bold text-[#ff3f6c]">₹0</div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Products Directory</h2>
            <button className="bg-[#ff3f6c] text-white px-4 py-2 rounded font-bold text-sm">+ Add Product</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
                <tr>
                  <th className="p-4 font-bold">Product</th>
                  <th className="p-4 font-bold">Category</th>
                  <th className="p-4 font-bold">Price</th>
                  <th className="p-4 font-bold">Stock</th>
                  <th className="p-4 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.slice(0, 10).map(p => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-4 flex items-center gap-3">
                      <img src={p.image} className="w-10 h-10 rounded object-cover" />
                      <span className="font-medium text-gray-800">{p.title}</span>
                    </td>
                    <td className="p-4 text-gray-600 capitalize">{p.category}</td>
                    <td className="p-4 font-medium">₹{p.price}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">{p.stock}</span>
                    </td>
                    <td className="p-4 text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 text-center text-sm text-gray-500 bg-gray-50 border-t">
              Showing 10 of {products.length} products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
