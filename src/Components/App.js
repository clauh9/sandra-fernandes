import NavBar from "./NavBar";
import React from "react";
import Biscuit from "./Pages/Biscuit";
import Croche from "./Pages/Croche";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { AuthProvider } from "./AuthContext";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biscuit" element={<Biscuit />} />
          <Route path="/croche" element={<Croche />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
