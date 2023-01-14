import React from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "../Stars/Stars";

function WelcomePage() {
  return (
    <div className="w-full h-full">
      <Canvas className="w-full h-full" camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "22%",
          //   transform: "translate3d(-50%,-50%,0)",
          //   zIndex: "10",
          //   width: "100vw",
          //   height: "100vh",
        }}
      >
        {/* <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
          Luminocity Industry Inc
        </h1> */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
          Luminocity Industry Inc
        </h1>
      </div>
    </div>
  );
}

export default WelcomePage;
