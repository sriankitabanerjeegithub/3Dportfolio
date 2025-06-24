// // src/components/Hero3D.jsx
// import { Canvas } from "@react-three/fiber";
// import { Torus } from "@react-three/drei";

// export default function Hero3D() {
//   return (
//     <Canvas className="w-full h-full">
//       <ambientLight intensity={0.2} />
//       <directionalLight position={[2, 2, 2]} intensity={1.2} color="cyan" />
//       <Torus args={[1, 0.3, 16, 100]} rotation={[0.5, 0.5, 0]} scale={1.2}>
//         <meshStandardMaterial color="cyan" wireframe />
//       </Torus>
//     </Canvas>
//   );
// }

// src/components/Hero3D.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useRef } from "react";

function RotatingTorus() {
  const torusRef = useRef();
  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Torus ref={torusRef} args={[2, 0.7, 32, 100]} scale={1.8}>
      <meshStandardMaterial color="cyan" wireframe />
    </Torus>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} color="cyan" />
      <RotatingTorus />
    </Canvas>
  );
}
