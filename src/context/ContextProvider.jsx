import React, { useState, useEffect, useReducer } from "react";
import { Context } from "./Context";
import axios from "axios";
import {
	getByQuery,
	getTopRated,
	getTrending,
	getSeries,
	getById,
	getLang,
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
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
