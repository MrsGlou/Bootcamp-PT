import React from 'react';
import { useOutletContext } from 'react-router-dom';

import VillagersGrid from '../components/VillagersGrid';

const Villagers = () => {
  const [requestVillagers] = useOutletContext();

  return (
    <div>
      <VillagersGrid data={requestVillagers} />
    </div>
  );
};

export default Villagers;
