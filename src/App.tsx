import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber'
import Stars from './components/Stars/Stars'
import NavBar from "./components/NavBar/NavBar"

function App() {
  return (
    <div className="w-full h-full">
        <Canvas className="w-full h-full" camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
      <div  className="absolute top-0 w-full">
        <NavBar />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">Luminocity Industry Inc</h1>
      </div>
    </div>
  );
}

export default App;
