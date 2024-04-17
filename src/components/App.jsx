import React from "react";
import { Route, Routes } from "react-router-dom";
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement";
import Error from "./pages/error/Error";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/logement" element={<Logement/>} />
      <Route path="/apropos" element={<Apropos/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  );
}

export default App;
