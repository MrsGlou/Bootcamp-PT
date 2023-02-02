import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Pokedex.css";

const Pokedex = () => {
  const [numPage, setNumPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPokemons = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${numPage}&limit=151`
    );
    const data = await res.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    getPokemons();
    setLoaded(true);
  }, [numPage]);

  return (
    <section>
      <h3>Pokedex</h3>
      {loaded ? (
        <div>
        <button className="pointed">
          <div></div>
          <div></div>
          <div></div>
        </button>
          <ul className="pokedex">
            {pokemons.map((pokemon, index) => (
              <li key={index} className="pokemon">
                <NavLink to={`/pokedex/${index + 1}`}>
                  <p className="poke-name">{pokemon.name}</p>
                  <p>{index + 1}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default Pokedex;
