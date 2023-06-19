import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
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
  <div className="App">
    
    {characterList.map((character) => (
      <div className= "Card" key= {character.id}>
        <h3>#{character.id}</h3>
        <h2>{character.name.toUpperCase()}</h2>
        <h3>{character.origin.name}</h3>
        <img src={character.image} alt= {character.name} />
      </div>
    ))}
  </div>
  );
};

export default App