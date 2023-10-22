import "./App.css";
import Tarjetap from "./componentes/Tarjetap";
import useClima from "./service/useClima";
import Info from "./componentes/Info";
import Pronostico from "./componentes/Pronostico";
import Buscador from "./componentes/Buscador";
function App() {
  // aca esta la cosntante de la data obtenida del la api
   const handleOnSearchChange = (searchData) =>{
    console.log(searchData)

   }


  return (
    <>
      
      <Buscador onSearchChange={handleOnSearchChange}/>
      
    </>
  );
}

export default App;
