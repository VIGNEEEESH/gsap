import React, { useRef, useState } from "react";
import "./App.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import image from "./assets/image.png";
const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const random1 = gsap.utils.random(-500, 500, 100);
  const random2 = gsap.utils.random(-500, 500, 10);
  useGSAP(() => {
    gsap.to(".mosquito", {
      x: x,
      y: y,
      duration: 0.5,
    });
  }, [x, y]);
  return (
    <main>
      <div className="animate">
        <img
          className="mosquito"
          onMouseEnter={() => {
            setX(random1);
            setY(random2);
          }}
          src={image}
        />
      </div>
    </main>
  );
};

export default App;
