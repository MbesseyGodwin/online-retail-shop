// /online-retail-shop/src/pages/Supermarket.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type ModelProps = {
  url: string;
};

function Model({ url }: ModelProps): JSX.Element {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Supermarket(): JSX.Element {
  return (
    <div className="h-screen w-screen">
      <Canvas className="h-full w-full mt-16">
        {/* Increase ambient light intensity for better overall visibility */}
        <ambientLight intensity={2} />
        
        {/* Spot light with wider angle and softer penumbra */}
        <spotLight position={[15, 15, 15]} angle={0.3} penumbra={1} intensity={3} />
        
        {/* Point light to add some highlights */}
        <pointLight position={[10, 10, 10]} intensity={3} />
        
        {/* Directional light for even illumination */}
        <directionalLight position={[10, 15, 15]} intensity={3} />

        {/* Load the model */}
        <Model url="Supermarket_3D_model.glb" />
        
        {/* Orbit controls for better interaction */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Supermarket;
