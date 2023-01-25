import { useState } from "react";

const Pokedex = () => {

    const [numPage, setNumPage]= useState(20);
    const [pokemons, setPokemons] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getPokemons = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${numPage}&limit=20`);
        const data = await res.json();
        setPokemons(data.results)
    }
    return ( 
        <section>
            <h3>Pokedex</h3>
        </section>
    )
}

export default Pokedex;