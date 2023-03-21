import React from "react";
import { useOutletContext } from "react-router-dom";
import Article from "../components/Article";

function News() {
  const [requestNews] = useOutletContext();

  return (
    <main className="newsContainer">
      <Article data={requestNews} />
    </main>
  );
}
export default News;
