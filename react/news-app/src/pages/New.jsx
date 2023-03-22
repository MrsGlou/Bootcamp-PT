import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function New() {
  const { id } = useParams();
  const [requestNews] = useOutletContext();
  const filterData = requestNews.data?.filter((article) => article.id == id);

  return (
    <>
      <Article key={filterData[0]._id} data={filterData[0]} />
    </>
  );
}

export default New;
