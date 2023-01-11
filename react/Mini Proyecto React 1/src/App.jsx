import React from "react";
import "./App.css";

//En la función app mapeamos los characters. la key es importante, deben tener un identificador numerico (index o x.id)
const App = () => {
  const [characterList, setCharactersList] = React.useState([]);

 React.useEffect(() => {
    async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json()
      );
      setCharactersList(data.results);
    };
  }, []);

  return (
    <div className="App">
      {characterList.map((character) => (
        <div key={character.id}>
          <h2>name: {character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
