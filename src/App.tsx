import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CubeProps = {
  posi: [number, number, number];
  color: string;
  scale: [number, number, number];
};
const Cube = ({ posi, color, scale }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh position={posi} ref={ref}>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <ambientLight intensity={1} />
      {/* <directionalLight position={[1,1,10]}/> */}
      <group position={[0, -1, 0]}>
        <Cube posi={[-1, 2, 0]} color="green" scale={[1, 1, 1]} />
        <Cube posi={[1, 2, 0]} color="red" scale={[1, 1, 1]} />
        <Cube posi={[-1, 0, 0]} color="blue" scale={[1, 1, 1]} />
        <Cube posi={[1, 0, 0]} color="hotpink" scale={[1, 1, 1]} />
      </group>
    </Canvas>
  );
}

export default App;
