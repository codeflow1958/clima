import React from "react";

function Tarjetap({ data }) {
  // let url = "https://openweathermap.org/img/wn/";
  //let iconurl = url + data?.weather[0].icon + ".png";

  const dateFormat = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date(date);
    return day.toLocaleDateString("en-gb", options);
  };

  return (
    <>
      <div className="w-60 ">
        <div></div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data.current?.weather[0].icon}.png`}
            alt=""
          />
        </div>
        <div>
          <p>{data.current?.temp} c </p>
          <p>{data.current?.weather[0].description}</p>

          <div>
            <div>
              <p>Today</p>
              <i> </i>
            </div>
            <p> </p>
          </div>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Tarjetap;
