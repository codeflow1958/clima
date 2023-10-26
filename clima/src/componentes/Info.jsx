function Info({ data }) {
  return (
    <>
      <div className="info">
        <div>
          <h1> Today Hightlights</h1>
        </div>
        <div>
          <section>
            <div>
              <p>Wind Status</p>
              <p>{data.current?.wind_speed}Mph</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>{data.current?.humidity}</p>
            </div>
          </section>
          <section>
            <div>
              <p>visibilyti</p>
              <p>{data.current?.visibility} </p>
            </div>

            <div>
              <p>Air Presure</p>
              <p>{data.current?.pressure}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Info;
