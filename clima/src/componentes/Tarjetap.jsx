import React from "react";

function Tarjetap({ data }) {
  let url = "https://openweathermap.org/img/wn/";
  let iconurl = url + data?.weather[0].icon + ".png";

  return (
    <div>
      <div></div>
      <div>
        <img src={iconurl} alt="" />
      </div>
      <div>
        <p>{data?.main.temp} c </p>
        <p>{data?.weather[0].description}</p>

        <div>
          <div>
            <p>{data?.main.temp} </p>
            <i>c</i>
          </div>
          <p> </p>
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default Tarjetap;
