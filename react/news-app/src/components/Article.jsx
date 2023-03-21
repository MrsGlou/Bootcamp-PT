import React from "react";
import { Link } from "react-router-dom";

function Article({ data }) {
    return (
        <>
              { // -----FORMA 2 (length): FORMA DE CONTROLAR EL RECARGAR LA PAGINA POR EL USUARIO---------
    data.length != 0 && data.data.articles.map((article) => (
        
        <figure key={article.id}>
          <h1>{article.title}</h1>
          <img className="imageFigure" src={article.img} alt={article.title} />
          <p className="description">{article.summary}</p>
        </figure>
      ))} 
        
        </>
    )

}

export default Article;
