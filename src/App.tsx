import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars/Stars";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="w-full h-full">
      {/* <Canvas
        className="w-full h-full absolute top-0"
        camera={{ position: [0, 0, 1] }}
      >
        <Stars />
      </Canvas> */}
      <Navigation />
    </div>
  );
}

export default App;
