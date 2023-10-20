import { useState, useEffect } from "react";

function useClima() {
  const [data, setData] = useState(null);

  // costante para realizar el fetch
  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();

    setState(datos);
  };
  console.log(data);

  //// aca esta el use efect
  useEffect(() => {
    getData(
      "https://api.openweathermap.org/data/2.5/weather?q=guatemala&appid=2f9b41a511d1351d341bc7bd79cd2e13&units=metric",
      setData
    );
  }, []);
  /// aca estoy retornando la data
  return { data };
}
// aca estoy exportando
export default useClima;
