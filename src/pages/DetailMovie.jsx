import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {gettinDetailMovie} from '../redux/marvelDucks'
import { useParams } from "react-router-dom";


const DetailMovie = () => {

    const dispatch = useDispatch()
    const {id} = useParams();


    React.useEffect(() => {
        const fetchData = () => {
            dispatch(gettinDetailMovie(id))
        }
        fetchData()
    }, [dispatch, id])

    const detailM = useSelector(store => store.movies.detail)

    return (
        <div className="card text-center text-uppercase mt-5">
            {
                detailM !== undefined &&
                <div className="card-body">
                    <img className="img-fluid" alt={detailM.title} src={detailM.photo + '.' + detailM.ext} />
                    <div className="card-title">{detailM.title}</div>
                    <p className="card-text">detailM.startYear</p>
                </div>
            }
            
        </div>
    )
}

export default DetailMovie