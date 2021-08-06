import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Iphone from "./Iphone";
import ReactDOM from "react-dom";
import { OrbitControls, softShadows } from "@react-three/drei";
import ScrollAnim from "./3dAnim/ScrollAnim";
import { makeStyles } from "@material-ui/core";

// Change scroll so that instead of moving on scroll, it moves when master div is fully
// encapsulated on screen, animate based on difference between div top and window

const useStyles = makeStyles((theme) => ({
  scroll: {
    position: "absolute",
    // background: "red",
    height: "100vh",
    width: "100vw",
    overflowY: "auto",
    bottom: "50vh",
    zIndex: 0,
    left: 0,
  },
  [theme.breakpoints.down("sm")]: {
    bottom: "50vh",
  },
}));

export default function CanvasDisplay({ children }) {
  softShadows();
  const classes = useStyles();
  const scrollRef = useRef();
  const start = useRef(0);
  const scroll = useRef(0);
  const doScroll = (e) => {
    scroll.current = e.target.scrollTop / e.target.scrollHeight;
  };
  return (
    <>
      <div>
        <Canvas
          onCreated={(state) => state.events.connect(scrollRef.current)}
          style={{ height: "100vh" }}
          shadows
          camera={{ position: [-5, 2, 35], fov: 10 }}
          raycaster={{
            computeOffsets: ({ clientX, clientY }) => ({
              offsetX: clientX,
              offSetY: clientY,
            }),
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[1, 10, -4]}
            intensity={0.4}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          {/* <OrbitControls /> */}
          <pointLight position={[0, 10, 10]} intensity={0.3} />
          <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
              <ScrollAnim scroll={scroll}>
                <Iphone />
              </ScrollAnim>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2.1, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" transparent opacity={0.4} />
              </mesh>
            </group>
          </Suspense>
        </Canvas>
        <div
          ref={scrollRef}
          onScroll={doScroll}
          className={classes.scroll}
          // style={{
          //   position: "absolute",
          //   // background: "red",
          //   height: "100vh",
          //   width: "100vw",
          //   overflowY: "auto",
          //   bottom: "50vh",
          //   zIndex: 0,
          //   left: 0,
          // }}
        >
          <div style={{ height: "120vh" }}></div>
        </div>
      </div>
    </>
  );
}
