
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage"

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function AppContent() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);

  const location = useLocation();

  const hideNavbarPaths = ["/login"];
  const hideFooterPaths = ["/login", "/cart", "/wishlist"];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500 ease-in-out min-h-screen`}
    >
      
      {showNavbar && <Navbar dark={dark} toggle={toggle} showcontent={true} showprofile={true}/>}

      <Routes>
        <Route path="/" element={<HomePage />} />

         <Route
    path="/product/:type"
    element={<ProductPage />}
  />
        <Route
          path="/login"
          element={<LoginPage dark={dark} toggle={toggle} showcontent={false} />}
        />
        <Route
          path="/cart"
          element={<CartPage dark={dark} toggle={toggle} showcontent={false} />}
        />
        <Route
          path="/wishlist"
          element={<WishlistPage dark={dark} toggle={toggle} showcontent={false}/>}
        />
         <Route path="/admin" element={<AdminPage dark={dark} toggle={toggle} showcontent={false} />} />
      </Routes>
      

      {showFooter && <Footer dark={dark} />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
