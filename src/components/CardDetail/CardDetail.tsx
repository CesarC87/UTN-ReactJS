import React , { useContext } from 'react'
import './CardDetail.scss'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { Context } from '../../context/Context';
import { url } from 'inspector';

const CardDetail = () => {

    const { id } = useParams();
    const { setId , titleDetail, imageUrl } = useContext(Context)   
    const img = `${imageUrl+titleDetail.poster_path}` 
    const img2 = `${imageUrl+titleDetail.backdrop_path}` 

    console.log('detail desde detail',titleDetail)

    useEffect(()=>{
        setId(id)
    }, [id])

  return (
    <div className='cardDetail' style={{backgroundImage: `url(${img2})`}}>
        <div className="filter">
            <div className="cardDetail__izq">
                <div className="cardDetail__izq--imgContainer">
                    <img src={`${img}`} alt="" />
                </div>
            </div>
            <div className="cardDetail__der">
                <h3>Titulo</h3>
            </div>
        </div>
    </div>
  )
}

export default CardDetail