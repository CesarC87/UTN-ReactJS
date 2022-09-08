import React , {useContext} from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import './Home.scss'

import { Context } from "../../context/Context";
import CarouselHome from "../CarouselHome/CarouselHome";

const Home = () => {
	const { moviesRTK, seriesRTK } = useContext(Context);

	console.log('home')

	return (
		<section>		
			<CardContainer />
			{moviesRTK?.queryResults.length === 0 && (
				<div className="carousel-area">
					<div className="container">
						<CarouselHome
							listado={moviesRTK.topRated}
							titulo="Populares en MovieFun"
							type='movie'
						/>
						<hr />
						<CarouselHome
							listado={moviesRTK.populares}
							titulo="Tendencia esta semana"
							type='movie'
						/>
						<hr />
						<CarouselHome listado={seriesRTK.series} titulo="Series" type='tv' />
					</div>
				</div>
			)}		
		</section>
	);
};

export default Home;
