const ShowObject = () => {
  const plants = [
    {name: "Cactus", price: 2},
    {name: "Gerbera", price: 4},
    {name: "Petunia", price: 5},
    {name: "Crisantemo", price: 3.5},
  ];
  const listPlants = plants.map((plant, index) => <li key={index}>{plant.name + " cuesta " + plant.price * 2 + "€"}</li>)

  return (<ul>{listPlants}</ul>);
};

export default ShowObject;
