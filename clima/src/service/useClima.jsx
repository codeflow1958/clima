import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState(null);
  const [week, setWeek] = useState(null);

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };
  console.log(week);

  //// aca esta el use efect
  useEffect(() => {
    getData(
      "https://api.openweathermap.org/data/2.5/weather?q=guatemala&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric",
      setData
    );
  }, []);

  // fetch a la segunda api
  useEffect(() => {
    getData(
      "https://api.openweathermap.org/data/2.5/forecast?q=guatemala&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric",
      setWeek
    );
  }, []);

  /// aca estoy retornando la data
  return { data, week };
}
// aca estoy exportando
export default useClima;
