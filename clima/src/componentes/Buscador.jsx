import useClima from "../service/useClima";

function Buscador() {
  const { changeContry, cahngeLat } = useClima();
  return (
    <div>
      <form onSubmit={changeContry}>
        <input type="text" />
        <button> soy el Buscador</button>
      </form>
    </div>
  );
}

export default Buscador;
