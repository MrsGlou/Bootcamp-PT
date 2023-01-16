import { useEffect, useState } from "react";
import Card from "../Card/Card";

export const CharacterList = () => {
    const [characterList, setCharacterList] = useState([]);
  
    useEffect(() => {
      (async () => {
        let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
          (res) => res.json()
        );
  
        setCharacterList(data.results);
      })();
    }, []);

  return (
    <ul>
      {characterList.map((character, index) => {
        <li key={index}>{character.name}</li>;
      })}
    </ul>
  );
};

export default CharacterList;
