import React, { useState, useEffect } from "react";
import { Context } from "./Context";
import { getTopRated , getTrending, getSeries, getById, imageUrl , getByQueryGenres, getGeneros, getByQuery } from '../services/useGet'
import { useSelector, useDispatch } from 'react-redux'
import { resetQueryRtk} from "../Store/Slices/moviesSlice";

const ContextProvider = ({ children }) => {

	const moviesRTK = useSelector((state) => state.movies)
	const seriesRTK = useSelector((state) => state.series)
	const dispatch = useDispatch()	

	const [idGenres, setIdGenres] = useState('');
	const [id, setId] = useState();	
	const [type, setType] = useState();
	
	useEffect(() => {	 
		moviesRTK.query === "" && dispatch(resetQueryRtk())        
		getByQuery(moviesRTK.query, dispatch)
	}, [moviesRTK.query]);

	useEffect(() => {
		getByQueryGenres(dispatch, idGenres);
	}, [idGenres]);


	useEffect(() => {		
		//Mejores rankeadas
		getTopRated(dispatch);
		//Tendencias
		getTrending(dispatch);
		//Series
		getSeries(dispatch);
		//Generos
		getGeneros(dispatch);
		// Language
		// getLang(setLang);
	}, []);

	useEffect(() => {
		getById(dispatch, id, type);
	}, [id,  type]);

	return (
		<Context.Provider
			value={{				
				imageUrl,								
				setId,		        				
				setIdGenres,				
				setType,
				moviesRTK,
				seriesRTK,
				dispatch
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
