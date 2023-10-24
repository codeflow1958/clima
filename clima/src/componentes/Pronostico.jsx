import React from "react";
function Pronostico({ data }) {
  //console.log(data.weather.icon);

  return (
    <>
      {data.daily?.map((item, idx) => (
        <div key={idx}>
          <div></div>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}.png`}
              alt="Weather"
            />
          </div>
          <div>
            <div className="minima">{item.temp?.min}</div>
            <div class="maxima">{item.temp?.max}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Pronostico;

/*
 <div className="pronostico">
      <div>
        <div>day{dateFormat(data?.list[3].dt)}</div>
        <div> </div>
        <div>
          <div></div>
          <div>temp {data?.list[3].main.temp} </div>
        </div>
      </div>
      
    </div>

*/
