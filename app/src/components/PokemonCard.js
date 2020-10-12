import React, { useState, useEffect } from 'react'


const PokemonCard = (props) => {
    const { pokemon, key } = props

    return (
        <div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"alt="pokemon"></img>
            <p>{pokemon.name}</p>
        </div>
    )
}

export default PokemonCard