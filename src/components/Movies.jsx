import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {gettingMoviesAction} from '../redux/marvelDucks'
import {nextMoviesAction} from '../redux/marvelDucks'

const MoviesMarvel = () => {

    const dispatch = useDispatch()

    const moviesM = useSelector(store => store.movies.array)
    console.log(moviesM)

    return (
        <div>
            <h1>Movie List!</h1>
            <button onClick={() => dispatch(gettingMoviesAction())}>Get Movies</button>
            <button onClick={() => dispatch(nextMoviesAction(20))}>Next Movies</button>
            <ul>
                {
                    moviesM.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MoviesMarvel