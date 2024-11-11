import React, { useState, useEffect } from "react";
import { setItem, getItem } from "../utils/LocalStorage";

// Product data (replace with real data)
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    description: "This is a great product",
    model: "/models/product1.glb",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    description: "Another amazing product",
    model: "/models/product2.glb",
  },
  {
    id: 3,
    name: "Product 3",
    price: 19.99,
    description: "Affordable and useful",
    model: "/models/product3.glb",
  },
  {
    id: 4,
    name: "Product 4",
    price: 99.99,
    description: "Premium quality item",
    model: "/models/product4.glb",
  },
];

const Products: React.FC = () => {
  // Initialize cart state with data from localStorage
  const [cart, setCart] = useState<any[]>(() => getItem("cart") || []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isCheckoutMsg, setIsCheckoutMsg] = useState(false);

  // Function to add product to cart
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      // Update localStorage with the new cart data
      setItem("cart", updatedCart);
      return updatedCart;
    });
  };

  // Function to remove product from cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      // Update localStorage with the new cart data
      setItem("cart", updatedCart);
      return updatedCart;
    });
  };

  // Handle cart changes and persist in localStorage
  useEffect(() => {
    if (cart.length > 0) {
      setItem("cart", cart);
    }
  }, [cart]);

  // Checkout function (mocked for now)
  const checkout = () => {
    // You can integrate a payment gateway here
    // For now, clear the cart after checkout
    setCart([]);
    setItem("cart", []);
    setIsCheckoutMsg(true); // Show the checkout message
    setIsCartOpen(false); // Close the cart modal after checkout
  };

  // Toggle the cart modal
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        {/* Cart button to open modal */}
        <button
          onClick={toggleCart}
          className="p-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          View Cart ({cart.length})
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </p>

            {/* Add to cart button */}
            <button
              onClick={() => addToCart(product)}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-lg shadow-xl w-3/4 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="text-5xl text-gray-500 hover:text-gray-700 transition"
              >
                &times;
              </button>
            </div>

            {/* Table for cart items */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-center border border-separate border-spacing-0">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-600 border-b border-black">
                      Product
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-600 border-b border-black">
                      Price
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-600 border-b border-black">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td
                        colSpan={3}
                        className="px-4 py-2 text-center text-gray-500"
                      >
                        Your cart is empty.
                      </td>
                    </tr>
                  ) : (
                    cart.map((item: any, index: number) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {item.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-4 text-sm text-red-500 cursor-pointer hover:text-red-700">
                          <button onClick={() => removeFromCart(item.id)}>
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Total and Checkout Section */}
            {cart.length > 0 && (
              <div className="mt-6 flex justify-between items-center font-semibold text-gray-800">
                <span className="text-lg">Total:</span>
                <span className="text-2xl text-green-600">
                  $
                  {cart
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </div>
            )}

            {/* Checkout Button */}
            {cart.length > 0 && !isCheckout && (
              <div className="mt-6">
                <button
                  onClick={checkout}
                  className="w-full p-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Thank You Message After Checkout */}
      {isCheckoutMsg && (
        <div className="fixed bg-black bg-opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 text-white py-4 px-6 text-center rounded-xl shadow-lg z-50 transition-all">
          <h3 className="text-xl font-semibold mb-2">
            Thank you for your purchase!
          </h3>
          <p className="text-sm mb-4">
            Your order has been processed. We'll send you a confirmation
            shortly.
          </p>
          <button
            className="w-1/2 p-3 bg-white text-black rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
            onClick={() => setIsCheckoutMsg(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
