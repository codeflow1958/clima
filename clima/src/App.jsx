import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const { data, week } = useClima();
  return (
    <>
      <Tarjetap data={data} />
      <Pronostico data={week} />
      <Info data={data} />
    </>
  );
}

export default App;
