import React from "react";
import { useOutletContext } from "react-router-dom";
import New from "../components/New";

function News() {
  const [requestNews] = useOutletContext();

  return (
    <main className="newsContainer">
      <New data={requestNews} />
    </main>
  );
}
export default News;
