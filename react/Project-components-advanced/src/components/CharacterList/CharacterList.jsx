import { useEffect, useState } from "react";
import Card from "../Card/Card";

const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json(),   
      );

      setIsLoading(false);

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <ul>
      {!isLoading && characterList.map((character) => {
        <Card key={character.id} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;
