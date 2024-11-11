// src/pages/Cart.tsx
import React, { useEffect, useState } from 'react';
import { getItem, setItem } from '../utils/LocalStorage';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = getItem('cart');
    setCart(storedCart || []);
  }, []);

  const checkout = () => {
    setItem('cart', []); // Clear cart after checkout
    navigate('/checkout');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
          <button onClick={checkout} className="mt-4 p-2 bg-green-500 text-white rounded">
            Proceed to Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
