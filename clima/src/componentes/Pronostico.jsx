import React from "react";
function Pronostico({ data }) {
  //console.log(data.weather.icon);
  const dateFormat = (date) => {
    const fecha = new Date(date * 1000);
    return fecha.toLocaleDateString("en-gb");
  };

  return (
    <>
      <div className=" prediccion">
        {data.daily?.map((item, idx) => (
          <div key={idx}>
            <div> {dateFormat(item.dt)}</div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${item?.weather[0].icon}.png`}
                alt="Weather"
              />
            </div>
            <div>
              <div className="minima">Min{item.temp?.min}</div>
              <div className="maxima">Max{item.temp?.max}</div>
            </div>
          </div>
        ))}
      </div>
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
