import React , {useContext} from 'react'
import CardContainer from '../../containers/CardContainer/CardContainer'
import './Home.scss'

import { Context } from "../../context/Context";
import CarouselHome from "../CarouselHome/CarouselHome";

const Home = () => {
	const { queryResults, topRated, populares, series } = useContext(Context);

	return (
		<section>		
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
		</section>
	);
};

//   return (
//     <section>      
//       <CardContainer />
//       {
//         queryResults.length === 0 ?
//         <>
//           <Popular/>
//           <Trending/>
//           <Series/>
//         </> : <div></div>
//       }      
//     </section>
//   )
// }

// export default Home
export default Home;
