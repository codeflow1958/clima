import { useState } from "react";
import useClima from "../service/useClima";

const Buscador = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

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
    />
  );
};

export default Buscador;
