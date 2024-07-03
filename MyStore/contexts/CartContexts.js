import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const storedCartItems = await AsyncStorage.getItem('cartItems');
      if (storedCartItems !== null) {
        setCartItems(JSON.parse(storedCartItems));
      }
    } catch (error) {
      console.error('Error fetching cart items from AsyncStorage:', error);
    }
  };

  const addToCart = async (product) => {
    try {
      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      setCartItems([]);
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
