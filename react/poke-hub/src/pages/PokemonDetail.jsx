import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({});
    const { id } = useParams();
  
    const getPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      const moreData = await getPokemonSpeciesById(id);

      //Nos quedamos solo con la información que necesitamos y la metemos en un objeto.
    let pokemon = {
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        pkmType: [],
        id: data.id,
        weight: data.weight / 10,
        height: data.height / 10,
        HP: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        captureRate: moreData.captureRate,
        flavorText: moreData.flavorText,
        genera: moreData.genera,
        baseHappiness: moreData.baseHappiness,
      };

      //Función para traer los dos tipos de pokemon.
    data.types.forEach((item) => {
        pokemon.pkmType.push(item.type.name);
      });
 
      setPokemon(pokemon);
    };
    
    const getPokemonSpeciesById = async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await res.json();
      
        let newData = {
          captureRate: data.capture_rate,
          flavorText: "", //data.flavor_text_entries[34].flavor_text,
          genera: data.genera[5].genus,
          baseHappiness: data.base_happiness,
        };
      
        //Función para traer la explicación de cada pokemon en español.
        data.flavor_text_entries.forEach((item)=>{
          if(item.language.name === "es"){
          newData.flavorText= item.flavor_text;
          }
        })
      
        return newData;
      };
  
    useEffect(() => {
      getPokemon();
    }, []);

    return ( 
        <section>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.flavorText}</p>

        </section>
    )
}

export default PokemonDetail;