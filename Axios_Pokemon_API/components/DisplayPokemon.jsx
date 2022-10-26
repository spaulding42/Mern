import React from 'react'

function DisplayPokemon(props) {
    return (
        <div>
            {
                props.pokemonList.map((pokemon ,i) => {
                    return (
                        <div key = {i}>{pokemon.id}) {pokemon.name}</div>
                    )
                })
            }
        </div>
    )
}

export default DisplayPokemon