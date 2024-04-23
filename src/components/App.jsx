import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Apropos from "./pages/apropos/Apropos";
import Home from "./pages/home/Home";
import Logement from "./pages/logement/Logement";
import Error from "./pages/error/Error";
function App() {
  //state
  const [dataHome, setdataHome] = useState([]);

  function getHome() {
    return fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //comportements
  useEffect(() => {
    getHome().then((data) => {
      setdataHome(data);
    });
  }, []);
  //render
  return (
    <Routes>
      <Route
        path="/"
        element={<Home dataHome={dataHome} setdataHome={setdataHome} />}
      />
      <Route
        path="/logement/:homeId"
        element={<Logement dataHome={dataHome} setdataHome={setdataHome} />}
      />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
