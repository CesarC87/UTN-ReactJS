import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import { moviesReducer, initialStateMovies} from "../Reducers/moviesReducer";
import { getTopRated , getTrending, getSeries, getById, imageUrl , getByQueryGenres, getGeneros, getByQuery } from '../services/useGet'
import { moviesActions } from "../Actions/moviesActions";
import { useSelector, useDispatch } from 'react-redux'
import { getByQueryRtk } from "../Store/Slices/moviesSlices";

const ContextProvider = ({ children }) => {

	const moviesRTK = useSelector((state) => state.movies)
	const dispatch = useDispatch()

	console.log('moviesRTK desde context - rtk', moviesRTK)

	const [ movies, dispatchMovies ] = useReducer(moviesReducer, initialStateMovies)

	const [idGenres, setIdGenres] = useState('');
	const [id, setId] = useState();	
	const [type, setType] = useState();
	
	useEffect(() => {	 
		movies.query === "" && dispatchMovies( { type: moviesActions.resetQuery} )
		getByQuery(movies.query, dispatch)
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
				setType,
				moviesRTK
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
