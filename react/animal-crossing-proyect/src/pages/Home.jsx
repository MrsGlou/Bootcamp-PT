import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import VillagersGrid from '../components/VillagersGrid';
import './Home.css';

const Home = () => {
  const [requestVillagers] = useOutletContext();
  const villagers = Object.values(requestVillagers);

  const randomVillagers = (villagers) => {
    const result = [...villagers];
    const randomElements = [];

    while (randomElements.length < 6 && result.length > 0) {
      const randomIndex = Math.floor(Math.random() * result.length);
      randomElements.push(result[randomIndex]);
      result.splice(randomIndex, 1); // removemos el elemento del array result
    }
    return randomElements;
  };
  const randomElements = randomVillagers(villagers);

  return (
    <div className="homeVillagers">
      <VillagersGrid data={randomElements} />
      <button className="btn-ViewAll">
        <Link to="/villagers">VER TODOS</Link>
      </button>
    </div>
  );
};

export default Home;
