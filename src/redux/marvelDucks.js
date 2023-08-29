import axios from 'axios'

// Constantes
const dataInicial = {
    array: [],
    offset: 0
}

const GETTING_MOVIES = 'GETTING_MOVIES';
const NEXT_MOVIES = 'NEXT_MOVIES';

// Reducer
export default function marbelReducer (state = dataInicial, action) {
    switch(action.type){
        case GETTING_MOVIES:
            return {...state, array: action.payload}
        case NEXT_MOVIES:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        default: 
            return state
    }
}

// Acciones
export const gettingMoviesAction = () => async (dispatch, getState) => {
    // console.log(getState())
    const {offset} = getState().movies
    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/series?limit=20&offset=${offset}&apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        dispatch({
            type: GETTING_MOVIES,
            payload: res.data.data.results,
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextMoviesAction = (numero) => async(dispatch, getState) => {

    const {offset} = getState().movies
    const next = offset + numero

    console.log('siguiente: ', next)
    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/series?limit=20&offset=${offset}&apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        dispatch({
            type: NEXT_MOVIES,
            payload: {
                array: res.data.data.results,
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}