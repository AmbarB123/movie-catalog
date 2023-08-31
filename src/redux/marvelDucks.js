import axios from 'axios'

// Constantes // state
const dataInicial = {
    array: [],
    offset: 0,
    detail: []
}

const GETTING_MOVIES = 'GETTING_MOVIES';
const NEXT_MOVIES = 'NEXT_MOVIES';
const PREVIOUS_MOVIES = 'PREVIOUS_MOVIES';
const GETTING_ID_MOVIE =  'GETTING_ID_MOVIE';


// Reducer
export default function marbelReducer (state = dataInicial, action) {
    switch(action.type){
        case GETTING_MOVIES:
            return {...state, array: action.payload}
        case NEXT_MOVIES:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        case PREVIOUS_MOVIES:
            return {...state, array: action.payload.array, offset: action.payload.offset}
        case GETTING_ID_MOVIE:
            return {...state, detail: action.payload}
        default: 
            return state
    }
}

// Acciones recibo state
export const gettingMoviesAction = () => async (dispatch, getState) => {
    const {offset} = getState().movies

    if (localStorage.getItem('offset-0')) {
        dispatch({
            type: GETTING_MOVIES,
            payload: JSON.parse(localStorage.getItem('offset-0'))
        })
        return
    }
    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-onsaleDate&limit=15&offset=${offset}&apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        dispatch({
            type: GETTING_MOVIES,
            payload: res.data.data.results,
        })
        localStorage.setItem('offset-0', JSON.stringify(res.data.data.results))
    } catch (error) {
        console.log(error)
    }
}


export const nextMoviesAction = (numero) => async(dispatch, getState) => {
    const {offset} = getState().movies
    const next_update = offset + numero

    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-onsaleDate&limit=15&offset=${next_update}&apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        dispatch({
            type: NEXT_MOVIES,
            payload: {
                array: res.data.data.results,
                offset: next_update
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const previousMoviesAction = (numero) => async(dispatch, getState) => {
    const {offset} = getState().movies
    const previous = offset - numero

    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?hasDigitalIssue=true&orderBy=-onsaleDate&limit=15&offset=${previous}&apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        dispatch({
            type: PREVIOUS_MOVIES,
            payload: {
                array: res.data.data.results,
                offset: previous
            }
        })
    } catch (error) {
        console.log(error)
    }

}

export const gettinDetailMovie = (id) => async (dispatch) => {

    if (localStorage.getItem(id)) {
        dispatch({
            type: GETTING_ID_MOVIE,
            payload: JSON.parse(localStorage.getItem(id))
        })
        return
    }
    try {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=3c09fbf3d37d688c0a8a0a8ab4b56b1d`)
        const resp = res.data.data.results[0];
        dispatch({
            type: GETTING_ID_MOVIE,
            payload:{
                title: resp.title,
                photo: resp.thumbnail.path,
                startYear: resp.modified,
                ext: resp.thumbnail.extension,
                characters: resp.characters,
                dates: resp.dates,
                description: resp.description
            }
        })
        localStorage.setItem(id, JSON.stringify({
            title: resp.title,
            photo: resp.thumbnail.path,
            startYear: resp.modified,
            ext: resp.thumbnail.extension,
            characters: resp.characters,
            dates: resp.dates,
            description: resp.description
        }))
    } catch (error) {
        console.log(error);
    }
}