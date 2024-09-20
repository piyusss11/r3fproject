import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CubeProps = {
  posi: [number, number, number];
  color: string;
  scale?: [number, number, number];
  toursScale?: [number, number, number, number];
};
const Cube = ({ posi, color, scale }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 5;
    console.log(state);
  });
  return (
    <mesh position={posi} ref={ref}>
      <boxGeometry args={scale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ posi, color, scale }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={posi} ref={ref}>
      <sphereGeometry args={scale} />
      <meshStandardMaterial wireframe color={color} />
    </mesh>
  );
};
const Torus = ({ posi, color, toursScale }: CubeProps) => {
  return (
    <mesh position={posi} >
      <torusGeometry args={toursScale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const TorusKnot = ({ posi, color, toursScale }: CubeProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 5;
  });

  return (
    <mesh position={posi} ref={ref}>
      <torusKnotGeometry args={toursScale} />
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
      <Sphere posi={[0, 0, 0]} color="yellow" scale={[1, 30, 30]} />
      <Torus
        posi={[0, -2.5, 0]}
        color="green"
        toursScale={[0.8, 0.25, 40, 50]}
      />
      <TorusKnot
        posi={[-3, 0, 0]}
        color="hotpink"
        toursScale={[0.8, 0.16, 1000, 50]}
      />
    </Canvas>
  );
}

export default App;
