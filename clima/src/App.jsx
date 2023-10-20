import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";

function App() {
  // aca esta la cosntante de la data obtenida del la api
  const { data } = useClima();
  return (
    <>
      <Tarjetap></Tarjetap>
    </>
  );
}

export default App;
