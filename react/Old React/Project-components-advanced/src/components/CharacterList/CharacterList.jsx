import {useState, useEffect} from 'react'
import Card from '../Card/Card';


const CharacterList = () => {
 
    const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json(),   
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    
    <ul>
      {characterList.map((character) => 
          <Card key={character.id} character={character} />
      )}
    </ul>
  );
}

export default CharacterList