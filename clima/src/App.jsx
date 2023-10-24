import "./App.css";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";
import Buscador from "./componentes/Buscador";
function App() {
  // aca esta la cosntante de la data obtenida del la api
  const { data, country, changeContry } = useClima();
  //console.log(data);
  console.log(country);
  return (
    <>
      {/* <Buscador change={changeContry()}></Buscador> */}

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
