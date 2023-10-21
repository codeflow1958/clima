import Card from "./Card";
function Pronostico({ data }) {
  return (
    <div className="pronostico">
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
    </div>
  );
}

export default Pronostico;
