const WineDetail = ({ data }) => {
  //const { name, image, price, region } = data;
  return (
    <div>
      <img src={data[0].image} alt={data[0].name} />
      <h2>{data[0].name}</h2>
      <h3>From: {data[0].region}</h3>
      <h3>Pice: {data[0].price} €</h3>
    </div>
  );
};

export default WineDetail;
