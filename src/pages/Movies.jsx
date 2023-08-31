import React from 'react';
import { Link, useSearchParams  } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
            <div className='banner'>
                <img src="bg-banner.jpg" alt="" />
            </div>

            <div className="row container first-seccion mx-auto">
                <div className="col md-6 xs-12">
                    <h1 className="text-white">Comics List</h1>
                </div>
                <div className="col md-6 xs-12 flex-search">
                    <img src="search.png" alt="" className="search" />
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder='Search'
                        onChange={handleChange}
                        value={searchParams.get("filter") || ""}
                    />
                </div>
            </div>
        
            <div className='container flex-cards'>
                {moviesM
                    .filter((item) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true
                        let title = item.title.toLowerCase();
                        return title.startsWith(filter.toLowerCase());
                    })
                    .map(item => (
                        <Card className='card-main' key={item.id}>
                            <Card.Img variant="top" src={item.thumbnail.path + '.' + item.thumbnail.extension}  />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Link to={`/detail/${item.id}`}><Button className='btn btn-dark'>View</Button></Link>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>


            <div className="container btn-actions shadow-lg p-3 mb-5 rounded">
                {
                    offsetM > 0 && 
                    <button className='btn btn-dark' onClick={() => dispatch(previousMoviesAction(15))}>Previous</button>
                }
                {
                    moviesM.length > 0 &&
                    <button className='btn btn-dark' onClick={() => dispatch(nextMoviesAction(15))}>Next</button>
                }
            </div>
        </div>
    )
}

export default MoviesMarvel