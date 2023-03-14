import NavBar from "./NavBar";
import React from "react";
import Biscuit from "./Pages/Biscuit";
import Croche from "./Pages/Croche";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biscuit" element={<Biscuit />} />
        <Route path="/croche" element={<Croche />} />
      </Routes>
    </div>
  );
}

export default App;
