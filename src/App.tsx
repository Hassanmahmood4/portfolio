import { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import "./App.css";

import { LoadingProvider } from "./context/LoadingProvider";
import { isLikelySafari } from "./utils/browser";
import { CanvasBaseScene } from "./components/scene/CanvasBaseScene";
import { WebGLResizeFix } from "./components/scene/WebGLResizeFix";

const MainContainer = lazy(() => import("./components/MainContainer"));
const CharacterModel = lazy(() => import("./components/Character"));

const safariGL =
  typeof navigator !== "undefined" && isLikelySafari();

const App = () => {
  return (
    <LoadingProvider>
      <div className="webgl-root" aria-hidden>
        <Canvas
          shadows
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        /* Native scroll (Safari): window scroll must resize/redraw; drei View uses screen rects. */
        resize={
          safariGL
            ? { scroll: true, debounce: { scroll: 32, resize: 80 } }
            : { scroll: true, debounce: { scroll: 64, resize: 120 } }
        }
        gl={{
          alpha: true,
          stencil: true,
          depth: true,
          antialias: !safariGL,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        dpr={safariGL ? 1 : [1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        >
          <WebGLResizeFix />
          <View.Port />
          <CanvasBaseScene />
        </Canvas>
      </div>
      <Suspense fallback={null}>
        <MainContainer>
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;
