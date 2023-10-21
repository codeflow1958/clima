function Info({ data }) {
  return (
    <div className="info">
      <div>
        <h1> Today Hightlights</h1>
      </div>
      <div>
        <section>
          <div>
            <p>Wind Status</p>
            <p>{data?.wind.speed} mph</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{data?.main.humidity}</p>
          </div>
        </section>
        <section>
          <div>
            <p>visibilyti</p>
            <p>{data?.visibility} </p>
          </div>
          <div>
            <p>Air Presure</p>
            <p>{data?.main.pressure}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info;
