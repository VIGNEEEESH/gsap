import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
function App() {
  const boxRef = useRef(null);
  const { contextSafe } = useGSAP();
  const rotateBox = contextSafe(function () {
    gsap.to(boxRef.current, {
      rotate: 720,
      duration: 1,
    });
  });
  return (
    <main>
      <div className="animate">
        <button onClick={rotateBox}>animate</button>
        <div ref={boxRef} className="box"></div>
      </div>
    </main>
  );
}

export default App;
