import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import axios from "axios";
import {
	getByQuery,
	getByQueryGenres,
	getTopRated,
	getTrending,
	getSeries,
	getById,
	getLang,
	getGeneros,
	getPeliculas,
} from "../services/get";

const ContextProvider = ({ children }) => {
	// const [ state, dispatch ] = useReducer(reducer, initialState)

	const [query, setQuery] = useState("");
	const [queryGenres, setQueryGenres] = useState("");
	const [queryResults, setQueryResults] = useState([]);
	const [populares, setPopulares] = useState([]);
	const [topRated, setTopRated] = useState([]);
	const [peliculas, setPeliculas] = useState([]);
	const [series, setSeries] = useState([]);
	const [notFound, setNotFound] = useState(false);
	const [titleDetail, setTitleDetail] = useState(false);
	const [idGenres, setIdGenres] = useState("");
	const [id, setId] = useState();
	const [type, setType] = useState();
	const [lang, setLang] = useState(null);
	const [generos, setGeneros] = useState([]);
	const imageUrl = "https://image.tmdb.org/t/p/original";

	// console.log("idGenres desde conte", idGenres);
	// console.log("queryGenres desde conte", queryGenres);

	useEffect(() => {
		getByQuery(query, setQueryResults, setNotFound);
		query === "" && setQueryResults([]);
	}, [query]);

	useEffect(() => {
		getByQueryGenres(setQueryGenres, setNotFound, idGenres);
		queryGenres === "" && setQueryGenres([]);
	}, [idGenres]);

	useEffect(() => {
		//Mejores rankeadas
		getTopRated(setTopRated);
		//Tendencias
		getTrending(setPopulares);
		//Series
		getSeries(setSeries);
		//Generos
		getGeneros(setGeneros);
		// Language
		getLang(setLang);
		//peliculas
		getPeliculas(setPeliculas);
	}, []);

	useEffect(() => {
		getById(setTitleDetail, id, type);
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
				setType,
				titleDetail,
				lang,
				generos,
				setQueryGenres,
				setIdGenres,
				peliculas,
				queryGenres,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
