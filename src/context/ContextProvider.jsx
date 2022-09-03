import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import { moviesReducer, initialStateMovies} from "../Reducers/moviesReducer";
import { getTopRated , getTrending, getSeries, getById, getByQuery, imageUrl , getByQueryGenres, getGeneros } from '../services/useGet'
import { moviesActions } from "../Actions/moviesActions";

const ContextProvider = ({ children }) => {

	const [ movies, dispatchMovies ] = useReducer(moviesReducer, initialStateMovies)

	const [idGenres, setIdGenres] = useState('');
	const [id, setId] = useState();	
	const [type, setType] = useState();
	
	useEffect(() => {	 
		movies.query === "" && dispatchMovies( { type: moviesActions.resetQuery} )
		getByQuery(movies.query, dispatchMovies)
	}, [movies.query]);

	useEffect(() => {
		getByQueryGenres(dispatchMovies, idGenres);
		movies.queryGenres === "" && dispatchMovies( { type: moviesActions.setQueryGenres} );
	}, [idGenres]);


	useEffect(() => {		
		//Mejores rankeadas
		getTopRated(dispatchMovies);
		//Tendencias
		getTrending(dispatchMovies);
		//Series
		getSeries(dispatchMovies);
		//Generos
		getGeneros(dispatchMovies);
		// Language
		// getLang(setLang);
	}, []);

	useEffect(() => {
		getById(dispatchMovies, id, type);
	}, [id]);

	return (
		<Context.Provider
			value={{				
				imageUrl,								
				setId,		
        		dispatchMovies,			
				setIdGenres,
				movies,
				setType
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
