import React, { useContext , useState} from 'react'
import { Context } from '../../context/Context';
import Card from '../Card/Card';
import './Popular.scss'

const Popular = () => {

    const { topRated, imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(6);    

    const handlePaginate = () => {
		setPaginate((prev) => prev + 6);
	};
    
  return (
    <div className="populares-container">
			<div className="container">
            <h3>Populares en IMDB</h3>
				<div className="populares-container-list row">
					{topRated?.slice(0, paginate).map((film: any) => {
						return (                            
                                <Card
                                    film={film}
                                    imageUrl={imageUrl}
                                    key={film.id}                                    
                                />                         
						);
					})}
				</div>
				<div className="populares-container-footer">
          {paginate < topRated.length &&
					<button onClick={handlePaginate}>Más títulos</button>}
				</div>
			</div>
		</div>
  )
}

export default Popular