import React from "react";
import { Link } from "react-router-dom";

function Article({ data }) {
  return (
    <figure>
        <h1 className="titleArticle">{data.title}</h1>
        <h3>{data.author}-{data.published_date}</h3>
        <img className="imageFigure" src={data.img} alt={data.title} />
        <p className="description">{data.summary}{data.info}</p>
        <Link to={data.link}><button>Noticia completa</button></Link>
    </figure>
  );
}

export default Article;
