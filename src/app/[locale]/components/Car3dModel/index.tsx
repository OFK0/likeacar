'use client';

import { Euler } from 'three';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';

function CarModel(props: any) {
  const { scene } = useGLTF('/mercedes.glb');
  return <primitive object={scene} {...props} />;
}

export default function Car3DModel() {
  return (
    <Canvas flat camera={{ position: [5, -10, 0], fov: 12 }}>
      <ambientLight color="#f75823" intensity={0.2} />
      <CarModel position={[0, 0, 0]} rotation={[0, Math.PI / 1.8, -0.2]} scale={1.4} />
      <Environment preset="studio" environmentIntensity={0.3} environmentRotation={new Euler(0, 1, 0, 'XYZ')} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
}
