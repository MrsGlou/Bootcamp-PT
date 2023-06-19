import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Articles from "../components/Articles";

function Tecnology() {
  const [requestNews] = useOutletContext();
  const data = requestNews.filter((article) => article.topic === "Tecnología");

  return (
      <Articles data={data} />
  );
}

export default Tecnology;