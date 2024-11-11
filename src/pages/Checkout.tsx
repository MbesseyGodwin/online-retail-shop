// src/pages/Checkout.tsx
import React from 'react';

const Checkout: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <form className="bg-white p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-2xl font-bold mb-5">Checkout</h2>
      <input type="text" placeholder="Card Number" className="border p-2 w-full mb-3" />
      <input type="text" placeholder="Expiry Date" className="border p-2 w-full mb-3" />
      <input type="text" placeholder="CVC" className="border p-2 w-full mb-3" />
      <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
        Complete Purchase
      </button>
    </form>
  </div>
);

export default Checkout;
