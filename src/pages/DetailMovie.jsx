import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {detailMovieAction} from '../redux/marvelDucks'

const Detalle = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        const obtenerInfo = () => {
            dispatch(detailMovieAction())
        }
        obtenerInfo()
    }, [dispatch])

    const detail = useSelector(store => store.movies.details)
    // console.log(detail)

    return detail ? (
        <div className="card text-center text-uppercase">
            <div className="card-body">
                <img className="img-fluid" alt="" src={detail.foto} />
                <div className="card-title">{detail.nombre}</div>
            </div>
        </div>
    ) : null
}

export default Detalle