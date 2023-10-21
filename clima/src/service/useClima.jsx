import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState();
  const [week, setWeek] = useState();
  const [contry, setContry] = useState("quito");

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };
  console.log(week?.list[30].dt);

  //// aca esta el use efect
  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/weather?q=${contry}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setData
    );
  }, [contry]);

  // fetch a la segunda api
  useEffect(() => {
    getData(
      `https://api.openweathermap.org/data/2.5/forecast?q=${contry}&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric`,
      setWeek
    );
  }, [contry]);

  const dateFormat = (date) => {
    const options = { weekday: "short", day: "numeric", month: "short" };
    const day = new Date(date);
    return day.toLocaleDateString("en-gb", options);
  };
  console.log(contry);

  const changeContry = (e) => {
    e.preventDefault();
    setContry(e.target[0].value);
  };

  /// aca estoy retornando la data
  return { data, week, dateFormat, changeContry };
}
// aca estoy exportando
export default useClima;
