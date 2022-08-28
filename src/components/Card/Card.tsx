import React from 'react'
import './Card.scss'


const Card = ( { image }:{ image:string }) => {  
  
  return (
    <div className='card'>
        <img src={`${image}`} alt="imagenPelicula" />
    </div>
  )
}

export default Card