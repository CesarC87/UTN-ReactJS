import axios from "axios"

const api_key = "ec740ed26fd6ef4871dca3a51b00aa7a"
const language = 'es-MX'


export const getByQuery = (query:string, setQueryResults:any, setNotFound:any) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`)
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
}

export const getByQueryGenres = (setQueryGenres:any, setNotFound:any, idGenres: string) => {
  console.log('idGenres:',idGenres)
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idGenres}&language=${language}`)
  .then((response) => {
    if(response.data.results.length > 0) {
      setQueryGenres(response.data.results)
      setNotFound(false)        
    }else{
      setQueryGenres([])
      setNotFound(true)
    }       
  })
  .catch((err) => console.log(err))   
}

export const getTopRated = (setTopRated:any) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setTopRated(response.data.results))
    .catch((err) => console.log(err))
}

export const getTrending = (setPopulares:any) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setPopulares(response.data.results))
    .catch((err) => console.log(err))
}

export const getSeries = (setSeries:any) => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=${language}&page=1`)
    .then((response) => setSeries(response.data.results))
    .catch((err) => console.log(err))
}
export const getPeliculas = (setPeliculas:any) => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=1`)
  .then((response) => setPeliculas(response.data.results))
  .catch((err) => console.log(err))
}

export const getById = (setTitleDetail:any, id:string, type?: 'movie') => {
  axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=${language}`)
  .then((response) => setTitleDetail(response.data))    
  .catch((err) => console.log(err))    
}

export const getLang = (setLang: any) => {
  axios
  .get(
    `https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`
    )
    .then((response) => setLang(response.data))
    .catch((err) => console.log(err));
}

export const getGeneros = (setGeneros:any) => {
  axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=${language}`)
  .then((response) => setGeneros(response.data))
  .catch((err) => console.log(err))
}