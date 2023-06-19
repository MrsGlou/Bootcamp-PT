import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Articles from "../components/Articles";

function Photovoltaic() {
  const [requestNews] = useOutletContext();
  const data = requestNews.filter(
    (article) => article.topic === "Energía Fotovoltaica"
  );

  return <Articles data={data} />;
}

export default Photovoltaic;
