
import axios from "axios"
import { moviesActions } from '../Actions/moviesActions';
export const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
export const language = 'es-MX'
export const imageUrl = "https://image.tmdb.org/t/p/original";    

  // Get de data a partir de búsqueda del usuario
  export const getByQuery = (query, dispatchMovies) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`)
    .then((response) => {
      if(response.data.results.length > 0) {
        dispatchMovies( { type: moviesActions.getByQuery , payload: response.data.results } )
        dispatchMovies( { type: moviesActions.setNotFound , payload: false } )        
      }else{
        dispatchMovies( { type: moviesActions.resetQuery} )
        dispatchMovies( { type: moviesActions.setNotFound , payload: true } ) 
      }       
    })
    .catch((err) => console.log(err))   
}
  // Get de data , titulos mas valorados
  export const getTopRated = (dispatchMovies) => {   
     axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => { dispatchMovies( { type:moviesActions.getTopRated, payload: response.data.results } ) })
      .catch((err) => console.log(err))
  }
  // Get de data , tendencias
  export const getTrending = (dispatchMovies) => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => dispatchMovies( { type:moviesActions.getTrending, payload: response.data.results } ))
      .catch((err) => console.log(err))
  }
  // Get de data , Series
  export const getSeries = (dispatchMovies) => {
      axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=1`)
      .then((response) => dispatchMovies( { type:moviesActions.getSeries, payload: response.data.results } ))
      .catch((err) => console.log(err))
  }
  // Get de data , titulo especifico
  export const getById = (dispatchMovies, id) => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}`)
      .then((response) => {
        console.log(response.data)
        dispatchMovies( { type:moviesActions.getById, payload: response.data } )
      })    
      .catch((err) => console.log(err))    
  }

  export const getLang = (setLang) => {
    axios.get(`https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`)
        .then((response) => setLang(response.data))
        .catch((err) => console.log(err));
  }

  export const getByQueryGenres = (dispatchMovies, idGenres) => {  
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idGenres}&language=${language}`)
    .then((response) => {
      if(response.data.results.length > 0) {
        dispatchMovies( { type:moviesActions.getByQueryGenres, payload: response.data.results } )
        dispatchMovies( { type: moviesActions.setNotFound , payload: false } )         
      }else{
        dispatchMovies( { type:moviesActions.resetQueryGenres } )
        dispatchMovies( { type: moviesActions.setNotFound , payload: true } ) 
      }       
    })
    .catch((err) => console.log(err))   
  }
  // Get de data, generos para seleccionar
  export const getGeneros = (dispatchMovies) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=${language}`)
  .then((response) => { dispatchMovies( { type:moviesActions.getGeneros, payload: response.data } )
  })
  .catch((err) => console.log(err))
}

  
  
  




