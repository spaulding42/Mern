import React, {useState} from 'react'
import DisplayPokemon from './DisplayPokemon'
function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])

    const getAllPokemon = async() =>{
        let newPokemonList = []
        for(var i = 1; i <= 807; i++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            const newPokemon = await response.json()
            newPokemonList = [...newPokemonList, newPokemon]
        }
        setPokemonList(newPokemonList)
    }
    return (
        <div>
            <button onClick = {getAllPokemon}>Get Pokemon</button>
            {
                pokemonList?
                <DisplayPokemon pokemonList={pokemonList}/>: <div>Loading...</div>
            }
        </div>
    )
}

export default Pokemon