import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
function App() {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
      <div className="w-full h-full bg-black">
        <h1 className="text-white">HR Lattice</h1>
      </div>
    </>
  );
}

export default App;
