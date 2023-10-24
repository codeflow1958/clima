import "./App.css";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";
import { useEffect, useState } from "react";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const [ciudad, setCiudad] = useState("");

  const { data, country, changeContry } = useClima();
  //console.log(data);
  ///console.log(country);
  useEffect(() => {
    console.log(ciudad);
  }, [ciudad]);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setCiudad(e.target.value)}
          value={ciudad}
        />
        <button
          onClick={() => {
            changeContry(ciudad);
          }}
        >
          buscar
        </button>
      </div>
      {/* <div>
        <form onSubmit={changeContry}>
          <input type="text" />
          <button> soy el Buscador</button>
        </form>
      </div> */}
      {data && (
        <div className=" divmaster">
          <Tarjetap data={data} />
          <div className="div2">
            <Pronostico data={data} />
            <Info data={data} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
