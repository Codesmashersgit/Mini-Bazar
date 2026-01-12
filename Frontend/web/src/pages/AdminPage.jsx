import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="flex flex-col gap-4">
        <Link to="/admin/users" className="p-4 bg-blue-500 text-white rounded-md">Manage Users</Link>
        <Link to="/admin/products" className="p-4 bg-green-500 text-white rounded-md">Manage Products</Link>
        <Link to="/admin/orders" className="p-4 bg-purple-500 text-white rounded-md">Manage Orders</Link>
      </div>
    </div>
  );
};

export default Admin;
