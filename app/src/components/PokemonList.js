import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import PokemonCard from './PokemonCard'
import { fetchPokemon, nextPokemon } from '../actions/actions';

const PokemonList = (props) => {
    useEffect(() => {
        props.fetchPokemon()
    }, [])

    return (
        <div>
            <div>
                {
                    props.pokemon.map(pokemon => {
                        return <PokemonCard pokemon={pokemon} key={pokemon.url} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        error: state.error,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { fetchPokemon })(PokemonList);