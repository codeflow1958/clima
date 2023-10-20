import React from "react";
import Buscador from "./Buscador";

function Tarjetap({ data }) {
  return (
    <div>
      <div>
        <Buscador></Buscador>
      </div>
      <div>
        <img src="" alt="" /> aca va la imagen{" "}
      </div>
      <div>
        <p>{data?.main.temp} </p>
        <p>{data?.weather.main} </p>
        <div>
          <div>
            <p>Today</p>
            <i>c</i>
          </div>
          <p></p>
        </div>
        <p> ubicacion</p>
      </div>
    </div>
  );
}

export default Tarjetap;
