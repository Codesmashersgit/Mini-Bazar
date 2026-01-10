
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

function AppContent() {
  const [dark, setDark] = useState(false);
  const toggle = () => setDark(!dark);
const location = useLocation();

  const hideFooterPaths = ["/login", "/cart", "/wishlist"];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  return (
    <div
      className={`${
        dark ? "bg-black text-white" : "bg-white text-black"
      } transition-all duration-1000 ease-in-out min-h-screen`}
    >
      <Navbar showcontent={true} dark={dark} toggle={toggle} showprofile={true} />

      <Routes>
        <Route path="/" element={<HomePage />} />
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
          element={<WishlistPage dark={dark} toggle={toggle} showcontent={false} />}
        />
      </Routes>

      {showFooter && <Footer />}
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
