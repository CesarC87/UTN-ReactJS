
import axios from "axios"
import { getByQueryRtk, 
         resetQueryRtk, 
         getByQueryGenresRtk, 
         setNotFoundRtk, 
         resetQueryGenresRtk,
         getGenerosRtk,
         getTopRatedRtk,
         getTrendingdRtk,
         getByIdRtk } from "../Store/Slices/moviesSlice";
import { getSeriesRtk } from '../Store/Slices/seriesSlice'
export const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
export const language = 'es-MX'
export const imageUrl = "https://image.tmdb.org/t/p/original";    

  // Get de data a partir de búsqueda del usuario
  export const getByQuery = (query, dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`)
    .then((response) => {
      if(response.data.results.length > 0) {           
        dispatch(getByQueryRtk(response.data.results))    
        dispatch(setNotFoundRtk(false))                                
      }else{        
        dispatch(setNotFoundRtk(true))          
        dispatch(resetQueryRtk())          
      }       
    })
    .catch((err) => console.log(err))   
}
  // Get de data , titulos mas valorados
  export const getTopRated = (dispatch) => {   
     axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => { dispatch( getTopRatedRtk(response.data.results) ) })
      .catch((err) => console.log(err))
  }
  // Get de data , tendencias
  export const getTrending = (dispatch) => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => dispatch( getTrendingdRtk(response.data.results) ))
      .catch((err) => console.log(err))
  }
  // Get de data , Series
  export const getSeries = (dispatch) => {
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => dispatch( getSeriesRtk(response.data.results) ))
      .catch((err) => console.log(err))
  }
  // Get de data , titulo especifico
  export const getById = (dispatch, id) => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}`)
      .then((response) => {        
        dispatch( getByIdRtk(response.data) )
      })    
      .catch((err) => console.log(err))    
  }

  export const getLang = (setLang) => {
    axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`)
        .then((response) => setLang(response.data))
        .catch((err) => console.log(err));
  }

  export const getByQueryGenres = (dispatch, idGenres) => {  
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idGenres}&language=${language}`)
    .then((response) => {
      if(response.data.results.length > 0) {
        dispatch( getByQueryGenresRtk(response.data.results) )
        dispatch( setNotFoundRtk(false))         
      }else{
        dispatch( resetQueryGenresRtk() )
        dispatch( setNotFoundRtk(true) )         
      }       
    })
    .catch((err) => console.log(err))   
  }
  // Get de data, generos para seleccionar
  export const getGeneros = (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=${language}`)
  .then((response) => { dispatch( getGenerosRtk(response.data) )
  })
  .catch((err) => console.log(err))
}

  
  
  




