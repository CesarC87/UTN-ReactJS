import React , { useEffect, useState, useReducer } from 'react'
import Card from '../../components/Card/Card'
import axios, { Axios } from 'axios'
import './CardContainer.scss'

const CardContainer = () => {

  const [ query, setQuery ] = useState('')

  useEffect(()=>{ 
    let api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
  },[])

  return (
    <div className='cardContainer'>
        <Card />
    </div>
  )
}

export default CardContainer