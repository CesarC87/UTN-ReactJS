import React, {useContext} from 'react'
import axios from "axios"
import { Context } from "../context/Context";
import { moviesActions } from '../Actions/moviesActions';

const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
const language = 'es-MX'

const useGet = () => {

  // const { dispatchMovies } = useContext(Context)

//   const getByQuery = (query:string, setQueryResults:any, setNotFound:any) => {
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`)
//     .then((response) => {
//       if(response.data.results.length > 0) {
//         dispatchMovies( { type: moviesActions.getByQuery , payload: response.data.results } )
//         setNotFound(false)        
//       }else{
//         setQueryResults([])
//         setNotFound(true)
//       }       
//     })
//     .catch((err) => console.log(err))   
// }

const getTopRated = (setTopRated:any) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setTopRated(response.data.results))
    .catch((err) => console.log(err))
}

const getTrending = (setPopulares:any) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setPopulares(response.data.results))
    .catch((err) => console.log(err))
}

const getSeries = (setSeries:any) => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setSeries(response.data.results))
    .catch((err) => console.log(err))
}

const getById = (setTitleDetail:any, id:string) => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=${language}`)
    .then((response) => setTitleDetail(response.data))    
    .catch((err) => console.log(err))    
}

const getLang = (setLang: any) => {
  axios
			.get(
				`https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`
			)
			.then((response) => setLang(response.data))
			.catch((err) => console.log(err));
}
  return {
    // getByQuery,
    getById,
    getLang,
    getSeries,
    getTopRated,
    getTrending
  }
}
  
  export default useGet
  



