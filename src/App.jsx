import React from "react";
import Navbar from "./view/Navbar";
import About from "./view/About";
import Curicullum from "./view/CV";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<Curicullum />} />
      </Routes>
    </div>
  );
};

export default App;
