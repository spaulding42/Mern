import React, {useState, useEffect} from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from 'axios';

function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])
    const [updatedPokemonList, setUpdatedPokemonList] = useState([])
    const getAllPokemon = () =>{
        setUpdatedPokemonList(pokemonList)
    }
    useEffect(()=>{
        let newPokemonList = []
        let newPokemon = {};
        for(var i = 1; i <= 807; i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response=>{
                newPokemon = response.data
                newPokemonList.push(newPokemon)
                console.log(newPokemon)
                setPokemonList(newPokemonList)
            })
        }
    },[])
    return (
        <div>
            <button onClick = {getAllPokemon}>List All Pokemon</button>
            {
                pokemonList !== []?
                <DisplayPokemon pokemonList={updatedPokemonList}/>: <div>Loading...</div>
            }
        </div>
    )
}

export default Pokemon