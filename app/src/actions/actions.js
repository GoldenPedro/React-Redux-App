import axios from 'axios'
import { connect } from 'react-redux'

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const FETCH_NEXT_SUCCESS = "FETCH_NEXT_SUCCESS";
export const FETCH_NEXT_FAILURE = "FETCH_NEXT_FAILURE";

export const fetchPokemon = () => dispatch => {
    dispatch({ type: FETCH_POKEMON_START });
    axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            dispatch({
                type: FETCH_POKEMON_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: FETCH_POKEMON_FAILURE,
                payload: err.response
            })
        })
}