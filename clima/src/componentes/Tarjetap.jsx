import React from "react";

function Tarjetap({ data }) {
  return (
    <div>
      <div></div>
      <div>
        <img src="" alt="" /> aca va la imagen{" "}
      </div>
      <div>
        <p>{data?.main.temp} </p>
        <p>{data?.weather[0].description}</p>

        <div>
          <div>
            <p>Today</p>
            <i>c</i>
          </div>
          <p> </p>
        </div>
        <p> ubicacion</p>
      </div>
    </div>
  );
}

export default Tarjetap;
