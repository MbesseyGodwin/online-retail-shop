// src/pages/Products.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setItem, getItem } from '../utils/LocalStorage';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: 'Product 1', model: '/models/product1.glb' },
    { id: 2, name: 'Product 2', model: '/models/product2.glb' },
  ];

  const addToCart = (product: any) => {
    const cart = getItem('cart') || [];
    setItem('cart', [...cart, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <Canvas className="h-48">
              <ambientLight />
              <OrbitControls />
              <mesh>
                {/* Load 3D model here using GLTFLoader */}
              </mesh>
            </Canvas>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
