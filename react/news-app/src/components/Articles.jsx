import React from "react";
import { Link } from "react-router-dom";

function Articles({ data }) {
  return (
    <>
      {data.length != 0 &&
        data.map((article) => (
          <figure key={article.id}>
            <Link to={`/news/${article.id}`}>
              <h1>{article.title}</h1>
              <img
                className="imageFigure"
                src={article.img}
                alt={article.title}
              />
              <p className="description">{article.summary}</p>
            </Link>
          </figure>
        ))}
    </>
  );
}

export default Articles;
