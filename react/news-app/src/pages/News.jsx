import React from "react";
import { useOutletContext } from "react-router-dom";
import Articles from "../components/Articles";

function News() {
  const [requestNews] = useOutletContext();

  return (
    <main className="newsContainer">
      <Articles data={requestNews} />
    </main>
  );
}
export default News;
