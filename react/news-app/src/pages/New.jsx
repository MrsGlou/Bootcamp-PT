import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Article from "../components/Article";

function New() {
  const { id } = useParams();
  const [requestNews] = useOutletContext();
  const filterData = requestNews.filter((article) => article.id == id);

  return (
    <>
      <Article key={filterData[0].id} data={filterData[0]} />
    </>
  );
}

export default New;
