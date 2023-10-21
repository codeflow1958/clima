import useClima from "../service/useClima";
function Pronostico({ data }) {
  const { dateFormat } = useClima();
  return (
    <div className="pronostico">
      <div>
        <div>day{dateFormat(data?.list[9].dt)}</div>
        <div>img</div>
        <div>
          <div></div>
          <div>temp {data?.list[9].main.temp} </div>
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
        <div>day{dateFormat(data?.list[26].dt)} </div>
        <div>img</div>
        <div>
          <div> </div>
          <div>temp {data?.list[26].main.temp} </div>
        </div>
      </div>
      <div>
        <div>day {dateFormat(data?.list[34].dt)}</div>
        <div>img</div>
        <div>
          <div> </div>
          <div>temp {data?.list[34].main.temp} </div>
        </div>
      </div>
    </div>
  );
}

export default Pronostico;
