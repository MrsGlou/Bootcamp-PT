import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Articles from "../components/Articles";

function Film() {
  const [requestNews] = useOutletContext();
  const data = requestNews.filter((article) => article.topic === "Cine");

  return (
      <Articles data={data} />
  );
}

export default Film;