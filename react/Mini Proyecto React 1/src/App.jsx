import { useEffect, useState } from "react";
import "./App.css";

//En la función app mapeamos los characters. la key es importante, deben tener un identificador numerico (index o x.id)
const App = () => {
  const [characterList, setCharactersList] = useState([]);

 useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json()
      );
      setCharactersList(data.results);
    })();
  }, []);

  return (
    <figure className="App">
      {characterList.map((character) => (
        <div className="characterCard" key={character.id}>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <img src={character.image} alt={character.name} />
          <h2>{character.origin.name}</h2> 

        </div>
      ))}
    </figure>
  );
};

export default App;
