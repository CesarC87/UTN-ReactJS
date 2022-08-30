import React , { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import Card from '../Card/Card';
import './Series.scss'

const Series = () => {

    const { series, imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(6);

    const handlePaginate = () => {
		setPaginate((prev) => prev + 6);
	};
    
  return (
    <div className="series-container">
			<div className="container">
            <h3>Series</h3>
				<div className="series-container-list row">
					{series?.slice(0, paginate).map((film: any) => {
						return (
							<Card
								film={film}
								imageUrl={imageUrl}
								key={film.id}
							/>
						);
					})}
				</div>
				<div className="series-container-footer">
          {paginate < series.length &&
					<button onClick={handlePaginate}>Más títulos</button>}
				</div>
			</div>
		</div>
  )
}

export default Series