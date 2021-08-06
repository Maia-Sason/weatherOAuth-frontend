import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/iphonecomp.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Phone.geometry}
        material={nodes.Phone.material}
        position={[0.0, 1, 0.0]}
        rotation={[0, 4, 0]}
        scale={1}
      >
        <mesh
          castShadow
          geometry={nodes.Circle.geometry}
          material={nodes.Circle.material}
          position={[-0.27, 1.5, 0.06]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.67}
        >
          <mesh
            castShadow
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
            position={[-0.23, 0, -0.13]}
          />
          <mesh
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
            position={[-0.23, 0, 0.13]}
          />
          <group position={[0, 0.01, -0.19]} scale={0.5}>
            <mesh
              geometry={nodes.Circle004_1.geometry}
              material={materials.Lens}
            />
            <mesh
              geometry={nodes.Circle004_2.geometry}
              material={nodes.Circle004_2.material}
            />
          </group>
          <mesh
            geometry={nodes.Circle005.geometry}
            material={materials["Material.002"]}
            position={[0.08, 0.01, 0.13]}
            scale={0.16}
          />
          <group position={[0, 0.01, 0.19]} scale={0.5}>
            <mesh
              geometry={nodes.Circle010.geometry}
              material={materials["Inverted Lens"]}
            />
            <mesh
              geometry={nodes.Circle010_1.geometry}
              material={nodes.Circle010_1.material}
            />
          </group>
        </mesh>
        <mesh
          geometry={nodes.Circle006.geometry}
          material={materials["Metal "]}
          position={[-0.08, -2.07, -0.05]}
          scale={0.57}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0.81, -1.13, -0.05]}
          scale={1.67}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={nodes.Cube002_1.material}
          position={[0.99, 0.51, -0.05]}
          scale={1.67}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0.99, 0.87, -0.05]}
          scale={1.67}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[1, 1.2, -0.06]}
          scale={0.67}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-0.19, 1.94, -0.15]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.67}
        />
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-0.08, 1.94, -0.15]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          position={[-0.44, 1.49, 0.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        >
          <mesh
            geometry={nodes.Plane001_1.geometry}
            material={nodes.Plane001_1.material}
          />
          <mesh
            geometry={nodes.Plane001_2.geometry}
            material={nodes.Plane001_2.material}
          />
        </group>
        <group
          position={[0, 0, -0.16]}
          rotation={[Math.PI / 2, 3.15, 0]}
          scale={-1.67}
        >
          <mesh
            geometry={nodes.Plane002_1.geometry}
            material={materials.Glass}
          />
          <mesh
            geometry={nodes.Plane002_2.geometry}
            material={materials["Screen.001"]}
          />
        </group>
        <group position={[-0.44, 1.49, 0.07]} scale={[1.73, 1.73, 1.67]}>
          <mesh
            geometry={nodes.Plane003.geometry}
            material={nodes.Plane003.material}
          />
          <mesh
            geometry={nodes.Plane003_1.geometry}
            material={nodes.Plane003_1.material}
          />
        </group>
      </mesh>
    </group>
  );
}

useGLTF.preload("/iphonecomp.glb");
