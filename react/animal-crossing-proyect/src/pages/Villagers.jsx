import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';

import VillagersGrid from '../components/VillagersGrid';

const Villagers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [requestVillagers] = useOutletContext();
  const villagers = Object.values(requestVillagers);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(villagers.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentVillagers = villagers.slice(firstIndex, lastIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageItems = [];
  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <VillagersGrid data={currentVillagers} />
      <Pagination>{pageItems}</Pagination>
    </div>
  );
};

export default Villagers;
