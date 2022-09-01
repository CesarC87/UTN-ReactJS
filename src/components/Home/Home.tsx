import React, { useContext } from "react";
import CardContainer from "../../containers/CardContainer/CardContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.scss'

import { Context } from "../../context/Context";
import CarouselHome from "../CarouselHome/CarouselHome";

const Home = () => {
	const { queryResults, topRated, populares, series } = useContext(Context);

	return (
		<section>
			<Header />
			<CardContainer />
			{queryResults.length === 0 && (
				<div className="carousel-area">
					<div className="container">
						<CarouselHome
							listado={topRated}
							titulo="Populares en MovieFun"
						/>
						<hr />
						<CarouselHome
							listado={populares}
							titulo="Tendencia esta semana"
						/>
						<hr />
						<CarouselHome listado={series} titulo="Series" />
					</div>
				</div>
			)}
			<Footer />
		</section>
	);
};

export default Home;
