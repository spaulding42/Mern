import React from 'react'

function DisplayPokemon(props) {
    return (
        <div>
            {
                props.pokemonList.map((pokemon ,i) => {
                    return (
                        <div key = {i}>{i+1}) {pokemon.name}</div>
                    )
                })
            }
        </div>
    )
}

export default DisplayPokemon