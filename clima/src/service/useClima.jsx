import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [country, setCountry] = useState("nicaragua");

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };
  console.log(week.city.coord.lon);
  console.log(data);

  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=2f9b41a511d1351d341bc7bd79cd2e13`,
      setData
    );
  }, [country]);
  //// aca esta el use efect

  // fetch a la segunda api
  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setWeek
    );
  }, [country]);
  const changeContry = (e) => {
    e.preventDefault();
    setCountry(e.target[0].value);
  };

  const dateFormat = (date) => {
    const fecha = new Date(date * 1000);
    return fecha.toLocaleDateString("en-gb");
  };

  /* useEffect(() => {
    setLat(week.city.coord.lat);
  }, []);
  useEffect(() => {
    setLon(week.city.coord.lon);
  }, []);*/

  /// aca estoy retornando la data
  return { data, week, dateFormat, changeContry, country };
}
// aca estoy exportando
export default useClima;
