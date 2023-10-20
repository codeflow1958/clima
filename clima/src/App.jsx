import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const { data } = useClima();
  return (
    <>
      <Tarjetap data={data} />
      <Info data={data} />
    </>
  );
}

export default App;
