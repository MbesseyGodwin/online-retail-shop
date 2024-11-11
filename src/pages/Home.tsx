// src/pages/Home.tsx

import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import product1 from "../images/product1.png";
import product2 from "../images/product2.png";
import product3 from "../images/product3.png";

const Home: React.FC = () => {
  // Settings for the sliders
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderSettingsReviews = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4">
      {/* Header Section */}
      <header className="w-full max-w-5xl py-10 text-center">
        <h1 className="text-5xl font-bold text-purple-800">
          Welcome to Virtual Retail World
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Explore and purchase products in immersive 3D.
        </p>
        <div className="mt-8 space-x-4"><Link
            to="/supermarket"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
          >
            Supermarket
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-pink-500 text-white font-semibold rounded hover:bg-pink-600 transition-colors"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Product Features Slider */}
      {/* Product Features Slider */}
      <section className="w-full max-w-5xl mt-10 text-center">
        <h2 className="text-3xl font-semibold text-purple-800 text-center mb-4">
          Featured Products
        </h2>
        <Slider {...sliderSettings}>
          {[
            { id: 1, name: "Product 1", img: product1 },
            { id: 2, name: "Product 2", img: product2 },
            { id: 3, name: "Product 3", img: product3 },
          ].map((product) => (
            <div
              key={product.id}
              className="bg-white border border-black max-w-md text-center shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform"
            >
              {/* Centered Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-48 h-48 mx-auto rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Experience our latest products in stunning 3D.
              </p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Customer Reviews Slider */}
      <section className="w-full max-w-5xl mt-16 text-center">
        <h2 className="text-3xl font-semibold text-pink-600">
          What Our Customers Say
        </h2>
        <Slider {...sliderSettingsReviews} className="mt-8">
          {["User1", "User2", "User3"].map((user, index) => (
            <div
              key={index}
              className="bg-white border border-black shadow-lg rounded-lg p-6 mx-4 max-w-md transform hover:scale-105 transition-transform"
            >
              <p className="text-gray-700 italic">
                "Browsing products in 3D was an amazing experience! It makes
                online shopping so immersive."
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-600">
                - {user}
              </p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl mt-20 py-8 text-center border-t border-gray-300">
        <p className="text-gray-500 text-sm">
          &copy; 2024 Virtual Retail World. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
