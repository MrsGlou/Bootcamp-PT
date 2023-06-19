import React from "react";

const Card = ({character}) => {

  return (
    <li>
      <h2>#{character.id}</h2>
      <h2>{character.name}</h2>
      <img src={character.image} alt= {character.image}/>
      <h2>{character.origin.name}</h2>
      <h2>{character.status}</h2>
    </li>
  );
};

export default Card;
