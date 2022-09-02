import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import axios from "axios";
import { moviesReducer, initialStateMovies} from "../Reducers/moviesReducer";
import useGet from "../services/useGet";

const ContextProvider = ({ children }) => {

  const { getByQuery,
    getTopRated,
    getTrending,
    getSeries,
    getById,
    getLang, api_key, language } = useGet()

	const [ movies, dispatchMovies ] = useReducer(moviesReducer, initialStateMovies)

	const [query, setQuery] = useState("");
	const [queryResults, setQueryResults] = useState([]);
	const [populares, setPopulares] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [series, setSeries] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [titleDetail, setTitleDetail] = useState(false);
	const [id, setId] = useState();
	const [lang, setLang] = useState(null);
	const imageUrl = "https://image.tmdb.org/t/p/original";

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&language=${language}`)
    .then((response) => {
      if(response.data.results.length > 0) {
        dispatchMovies( { type:'getByQuery', payload: response.data.results } )
        setNotFound(false)        
      }else{
        setQueryResults([])
        setNotFound(true)
      }       
    })
    .catch((err) => console.log(err))   
		query === "" && setQueryResults([]);
	}, [query]);

	useEffect(() => {
		//Mejores rankeadas
		getTopRated(setTopRated);
		//Tendencias
		getTrending(setPopulares);
		//Series
		getSeries(setSeries);
		// Language
		getLang(setLang);
	}, []);

	useEffect(() => {
		getById(setTitleDetail, id);
	}, [id]);

	return (
		<Context.Provider
			value={{
				queryResults,
				imageUrl,
				setQuery,
				populares,
				topRated,
				series,
				notFound,
				setId,
				titleDetail,
				lang,
        dispatchMovies
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
