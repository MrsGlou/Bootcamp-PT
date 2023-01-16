import React from "react";

const Card = (props) => {
  const { character } = props;
  return (
    <li>
      <h2>id:{character.id}</h2>
      <h2>name: {character.name}</h2>
    </li>
  );
};

export default Card;
