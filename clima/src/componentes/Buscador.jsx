import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL } from "./api";

const Buscador = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
   const [data, setData] = useState(null);
   const getData = async (url, setState) => {
     const res = await fetch(url);
     const datos = await res.json();

     setState(datos);
   };

   //// aca esta el use efect
   useEffect(() => {
     getData(
       `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${API_KEY}`,
       setData
     );
   }, []);

   const loadOptions = (inputValue) => { 

   }

  /*const loadOptions = (inputValue) => {
    return fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${GEO_API_URL}`
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          option: response.data.map((el) => {
            return {
              value: `${el.lat} ${city.lon}`,
              lable: `${city.name} ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };*/

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="search for city"
      debouceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};

export default Buscador;

/* return {
          option: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              lable: `${city.name} ${city.countryCode} `,
            };
          }),
        };*/
