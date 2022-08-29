import React , { useState, useEffect } from 'react'
import { Context } from './Context'
import axios from 'axios'

const ContextProvider = ( { children } ) => {

  const [ query, setQuery ] = useState('')
  const [ data, setData ] = useState([])
  const imageUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(()=>{ 
    let api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=es-MX`)
    .then((response) => setData(response.data.results))
    .catch((err) => console.log(err))
  },[query])

  return (
    <Context.Provider value={{ data, imageUrl, setQuery}}>
            { children }
    </Context.Provider>
  )
}

export default ContextProvider