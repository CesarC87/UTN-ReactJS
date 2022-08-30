import React, { useState, useContext } from 'react'
import { Context } from '../../context/Context';
import Card from '../Card/Card';
import './Trending.scss'

const Trending = () => {
    const { populares, imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(6);

    const handlePaginate = () => {
		setPaginate((prev) => prev + 6);
	};
    
  return (
    <div className="trending-container">
			<div className="container">
            <h3>Tendencia esta semana</h3>
				<div className="trending-container-list row">
					{populares?.slice(0, paginate).map((film: any) => {
						return (
							<Card
								film={film}
								imageUrl={imageUrl}
								key={film.id}
							/>
						);
					})}
				</div>
				<div className="trending-container-footer">
          {paginate < populares.length &&
					<button onClick={handlePaginate}>Más títulos</button>}
				</div>
			</div>
		</div>
  )
}

export default Trending