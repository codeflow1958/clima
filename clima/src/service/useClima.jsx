import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(null);
  const [contry, setContry] = useState("guatemala");

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };
  console.log(week?.list[26].dt_txt);

  //// aca esta el use efect
  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setData
    );
  }, []);

  // fetch a la segunda api
  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${contry}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setWeek
    );
  }, []);

  const dateFormat = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date(date);
    return day.toLocaleDateString("en-gb", options);
  };
  //console.log(toString(week?.list[26].sys.dt_txt));

  const changeContry = () => {
    e.preventDefault();
    setContry();
  };

  /// aca estoy retornando la data
  return { data, week, dateFormat };
}
// aca estoy exportando
export default useClima;
