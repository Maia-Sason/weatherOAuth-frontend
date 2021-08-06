import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

// https://codesandbox.io/s/tying-canvas-to-scroll-offset-itfgk
export default function ScrollAnim({ scroll, children }) {
  const { viewport } = useThree();
  const group = useRef();
  const vec = new THREE.Vector3();
  useFrame(() => {
    group.current.position.lerp(
      vec.set(0, -viewport.height * scroll.current, 0),
      0.1
    );
    group.current.rotation.y = -viewport.height * scroll.current * 0.5;
  });
  return <group ref={group}>{children}</group>;
}
