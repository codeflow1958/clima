import useClima from "../service/useClima";
function Pronostico({ data }) {
  const { dateFormat } = useClima();

  return (
    <div className="pronostico">
      <div>
        <div>day{dateFormat(data?.list[9].dt)}</div>
        <div> </div>
        <div>
          <div></div>
          <div>temp {data?.list[9].main.temp} </div>
        </div>
      </div>
      <div>
        <div>day{dateFormat(data?.list[15].dt)} </div>
        <div></div>
        <div>
          <div> </div>
          <div>temp {data?.list[15].main.temp} </div>
        </div>
      </div>
      <div>
        <div>day{dateFormat(data?.list[18].dt)} </div>
        <div>img</div>
        <div>
          <div> </div>
          <div>temp {data?.list[18].main.temp} </div>
        </div>
      </div>
      <div>
        <div>day {dateFormat(data?.list[28].dt)}</div>
        <div>img</div>
        <div>
          <div> </div>
          <div>temp {data?.list[2].main.temp} </div>
        </div>
      </div>
    </div>
  );
}

export default Pronostico;
