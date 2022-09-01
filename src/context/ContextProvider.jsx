import React , { useState, useEffect } from 'react'
import { Context } from './Context'
import axios from 'axios'

const ContextProvider = ( { children } ) => {

  const [ query, setQuery ] = useState('')
  const [ queryResults, setQueryResults ] = useState([])
  const [ populares, setPopulares ] = useState([])
  const [ topRated, setTopRated ] = useState([])
  const [ series, setSeries ] = useState([])
  const [ notFound, setNotFound ] = useState(false)
  const [ titleDetail, setTitleDetail ] = useState(false)
  const [ id, setId ] = useState()
  const imageUrl = 'https://image.tmdb.org/t/p/original'
  const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
  const language = 'es-MX'

  useEffect(()=>{ 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=es-MX`)
    .then((response) => {
      if(response.data.results.length > 0) {
        setQueryResults(response.data.results)
        setNotFound(false)        
      }else{
        setQueryResults([])
        setNotFound(true)
      }       
    })
    .catch((err) => console.log(err))   
      query === '' && setQueryResults([])      
  },[query])
  
  useEffect(()=>{ 
    //Mejores rankeadas
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setTopRated(response.data.results))
    .catch((err) => console.log(err))
    //Tendencias
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setPopulares(response.data.results))
    .catch((err) => console.log(err))
    //Series
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setSeries(response.data.results))
    .catch((err) => console.log(err))
  },[])

  useEffect(() => {
    console.log('id', id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    .then((response) => setTitleDetail(response.data))    
    .catch((err) => console.log(err))    
  }, [id])
  
  

  return (
    <Context.Provider value={{ queryResults, imageUrl, setQuery, populares, topRated, series, notFound , setId, titleDetail }}>
            { children }
    </Context.Provider>
  )
}

export default ContextProvider