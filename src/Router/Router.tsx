import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "../components/CardDetail/CardDetail";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Generos from "../components/Generos/Generos";
import Peliculas from "../components/Peliculas/Peliculas";
import Series from "../components/Series/Series";
import NoPage from "../components/NoPage/NoPage";

const Router = () => {
	return (
		<BrowserRouter basename="/UTN-ReactJS/">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
					<Route path="/title/:id/:type" element={<CardDetail />} />
					<Route path="/generos/" element={<Generos />} />
					<Route path="/peliculas/" element={<Peliculas />} />
					<Route path="/series/" element={<Series />} />
					<Route path="*" element={<NoPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
