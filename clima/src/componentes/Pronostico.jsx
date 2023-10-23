import useClima from "../service/useClima";
function Pronostico({ data }) {
  const { dateFormat } = useClima();

  return (
    <>
      {data.daily.map((item, idx) => (
        <div key={idx}>
          <p>hola</p>
        </div>
      ))}
    </>
  );
}

export default Pronostico;

/*
 <div className="pronostico">
      <div>
        <div>day{dateFormat(data?.list[3].dt)}</div>
        <div> </div>
        <div>
          <div></div>
          <div>temp {data?.list[3].main.temp} </div>
        </div>
      </div>
      
    </div>

*/
