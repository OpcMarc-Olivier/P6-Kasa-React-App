import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Logement({ dataHome }) {
  //state
  // const [dataHome, setdataHome] = useState([]);
  const [dataHomeId, setDataHomeId] = useState([]);
  const { homeId } = useParams();
  useEffect(() => {
    console.log(dataHome);
    const homeIdFound = dataHome.find((item, i) => {
      return item.id === homeId;
    });
    console.log(homeIdFound);
    setDataHomeId(homeIdFound);
  });

  // const myHome = ;

  //comportements

  //render
  return (
    <div>
      <div></div>
      <h1>{dataHomeId.title}</h1>
      <p>{dataHomeId.description}</p>

      <img src={dataHomeId.cover} alt="" />
    </div>
  );
}

export default Logement;
