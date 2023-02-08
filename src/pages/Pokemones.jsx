import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones (){

    const [pokemones, setPokemones] = useState([])
    const [pokemonSelected, setPokemonSelected] = useState('')

    const navigate = useNavigate();

    const verDetalle = () => {
        navigate(`/pokemones/${pokemonSelected}`);
    }

    const getPokemones =  async () =>{
       const res = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100')
       const data = await res.json();

       console.log(data.results)
       setPokemones(data.results)
   }
   useEffect(()=>{
       getPokemones()
   },[]) 
    return(
        <div>
            <h1>Selecciona un pokemon</h1>
            <select value={pokemonSelected} onChange={(e)=> setPokemonSelected(e.target.value)}>
            <option value="" disabled>Pokemones</option>
            {pokemones.map((pokemon) => {
                return (
                    <option value={pokemon.name} key={pokemon.name} >
                        {pokemon.name}
                    </option>
                )
            })}
            </select>
            <button  onClick={verDetalle}>Ver detalle</button>
        <h1>{pokemonSelected}</h1>
        </div>
    )
}