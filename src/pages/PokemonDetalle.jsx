import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function PokemonDetalle() {

    const [pokemon, setPokemon] = useState({})

    const { nombre } = useParams();

    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        const data = await res.json()
        console.log(data)

        setPokemon(data)
    }
    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div>
            <div className="pokemonCard">
                <div>

                    <img src={pokemon.sprites?.other?.dream_world.front_default || pokemon.sprites?.home.dream_world.front_default} alt="" />
                </div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <ul>

                        {pokemon.stats?.map((stat) => {
                            return (

                                <li>
                                    {stat.base_stat}
                                    {stat.stat.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}