// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
      // Check if item is already in the cart
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, update the quantity
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          )
        );
      } else {
        // If item is not in the cart, add it with quantity 1
        setCart([...cart, { ...item, quantity: 1 }]);
      }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCart(cart.map((item) => (item.id === itemId ? { ...item, quantity } : item)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
