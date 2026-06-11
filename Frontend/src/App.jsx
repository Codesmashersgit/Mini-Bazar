import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminPage from './pages/AdminPage';
import OrdersPage from './pages/OrdersPage';
import './App.css';

function AppContent() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);
  const location = useLocation();

  const hideNavbarPaths = ['/login'];
  const hideFooterPaths = ['/login', '/admin'];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className={`${dark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-500 min-h-screen`}>
      {showNavbar && <Navbar dark={dark} toggle={toggle} showcontent={true} showprofile={true} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:type" element={<ProductPage />} />
        <Route path="/product/:category/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage dark={dark} toggle={toggle} />} />
        <Route path="/cart" element={<CartPage dark={dark} toggle={toggle} />} />
        <Route path="/wishlist" element={<WishlistPage dark={dark} toggle={toggle} />} />
        <Route path="/orders" element={<OrdersPage dark={dark} toggle={toggle} />} />
        <Route path="/admin" element={<AdminPage dark={dark} toggle={toggle} />} />
      </Routes>
      {showFooter && <Footer dark={dark} />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <AppContent />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
