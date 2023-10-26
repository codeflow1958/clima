function Info({ data }) {
  return (
    <>
      <div>
        <div className="">
          <h1> Today Hightlights</h1>
        </div>
        <div>
          <section className="w-96 grid grid-cols-2 gap-4 py-3 px-3 ">
            <div>
              <p>Wind Status</p>
              <p>{data.current?.wind_speed}Mph</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>{data.current?.humidity}</p>
            </div>
          </section>
          <section className="w-96 grid grid-cols-2 gap-4 py-3  px-3">
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
