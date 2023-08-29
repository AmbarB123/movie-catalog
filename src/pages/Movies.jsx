import React from 'react';
import { Link, useSearchParams  } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'

import {gettingMoviesAction, nextMoviesAction, previousMoviesAction} from '../redux/marvelDucks'

const MoviesMarvel = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch()

    const moviesM = useSelector(store => store.movies.array)
    const offsetM = useSelector(store => store.movies.offset)

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(gettingMoviesAction())
        }
        fetchData()
    }, [dispatch])

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
    }
      };

    return (
        <div>
            <h1>Movie List!</h1>

            <input
                className="form-control mb-2"
                type="text"
                onChange={handleChange}
                value={searchParams.get("filter") || ""}
            />

            {
                offsetM > 0 && 
                <button onClick={() => dispatch(previousMoviesAction(20))}>Prevous Movies</button>
            }
            {
                moviesM.length > 0 &&
                <button onClick={() => dispatch(nextMoviesAction(20))}>Next Movies</button>
            }
            
            <ul>
                {moviesM
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true
                        let name = item.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(item => (
                        <li key={item.id}>
                            {item.name}
                            <button><Link to={`/detail/${item.id}`}>View</Link></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MoviesMarvel