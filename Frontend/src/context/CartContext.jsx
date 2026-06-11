import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const saved = localStorage.getItem('minibazar_cart');
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('minibazar_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, selectedSize, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.selectedSize === selectedSize);
      if (existing) {
        return prev.map(i => i.id === product.id && i.selectedSize === selectedSize ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { ...product, selectedSize, qty }];
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems(prev => prev.filter(i => !(i.id === productId && i.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId, selectedSize, qty) => {
    if (qty <= 0) return removeFromCart(productId, selectedSize);
    setCartItems(prev => prev.map(i => (i.id === productId && i.selectedSize === selectedSize) ? { ...i, qty } : i));
  };

  const clearCart = () => setCartItems([]);

  const isInCart = (productId) => cartItems.some(i => i.id === productId);

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <CartContext.Provider value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
