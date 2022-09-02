import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import axios from "axios";
import {
	getByQuery,
	getTopRated,
	getTrending,
	getSeries,
	getById,
} from "../services/get";

const ContextProvider = ({ children }) => {
	// const [ state, dispatch ] = useReducer(reducer, initialState)

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
		getByQuery(query, setQueryResults, setNotFound);
		query === "" && setQueryResults([]);
	}, [query]);

	useEffect(() => {
		//Mejores rankeadas
		getTopRated(setTopRated);
		//Tendencias
		getTrending(setPopulares);
		//Series
		getSeries(setSeries);
	}, []);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/configuration/languages?api_key=${api_key}`
			)
			.then((response) => setLang(response.data))
			.catch((err) => console.log(err));
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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
