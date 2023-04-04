import React, { useEffect, useState } from 'react';
import { getVillagers } from '../services/villagers';
import VillagersGrid from '../components/VillagersGrid';

const Villagers = () => {
  const [villagers, setVillagers] = useState([]);
  useEffect(() => {
    (async () => {
      setVillagers(await getVillagers());
    })();
  }, []);
  return (
    <div>
      <VillagersGrid data={villagers} />
    </div>
  );
};

export default Villagers;
