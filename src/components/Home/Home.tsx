import React , {useContext} from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import './Home.scss'

import { Context } from "../../context/Context";
import CarouselHome from "../CarouselHome/CarouselHome";

const Home = () => {
	const { movies } = useContext(Context);

	return (
		<section>		
			<CardContainer />
			{movies?.queryResults.length === 0 && (
				<div className="carousel-area">
					<div className="container">
						<CarouselHome
							listado={movies.topRated}
							titulo="Populares en MovieFun"
							type='movie'
						/>
						<hr />
						<CarouselHome
							listado={movies.populares}
							titulo="Tendencia esta semana"
							type='movie'
						/>
						<hr />
						<CarouselHome listado={movies.series} titulo="Series" type='tv' />
					</div>
				</div>
			)}		
		</section>
	);
};

export default Home;
