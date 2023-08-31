import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {gettinDetailMovie} from '../redux/marvelDucks'
import { Link, useParams } from "react-router-dom";


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
    console.log(detailM);

    return (
        <div className='container'>
            {
                detailM !== undefined &&
                <div className='detailComic'>
                    <div className='img'>
                        <img src={detailM.photo + '.' + detailM.ext} alt="cxvxcxv" />
                    </div>
                    <div className='text'>
                        <h1>{detailM.title}</h1>
                        
                        <p>
                        {
                            detailM.dates && 
                            <div className='pub'>
                                <h3>Published:</h3>
                                <p>{(detailM.dates[0].date).split('T')[0]}</p>
                            </div>
                        }
                        </p>

                    
                        {
                            detailM.description !== null && 
                            <div>
                                <h3 className='desc'>Description:</h3>
                                <p>{detailM.description}</p>
                            </div>
                        }

{
                            detailM.description == null && 
                            <div>
                                <h3 className='desc'>Description:</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, eligendi impedit doloribus ratione modi excepturi, veritatis hic et provident cum debitis sunt culpa quam iste ipsum totam blanditiis doloremque nihil.</p>
                            </div>
                        }
                        

                         <Link to='/'><button className='btn btn-danger back'>Back</button></Link> 
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailMovie