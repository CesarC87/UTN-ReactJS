import React, { useContext, useState, useRef, ChangeEvent } from "react";
import Card from "../../components/Card/Card";
import { Context } from "../../context/Context";

import "./CardContainer.scss";

const CardContainer = () => {
	const { setQuery, queryResults, imageUrl, notFound } = useContext(Context);
	const [paginate, setPaginate] = useState(12);  
  const debounce = useRef<NodeJS.Timeout>()

	const handleQuerySearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounce.current && clearTimeout( debounce.current )

    debounce.current = setTimeout(()=>{
      setQuery(e.target.value);
    }, 350)
	};
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	}; 

	return (
		<div className="card-container">
			<div className="busador">
				<div className="container">
					<label>
						<span>Encontrá tu película favorita</span>
						<input
							type="search"
							onChange={(e) => handleQuerySearch(e)}
						/>
					</label>
				</div>
			</div>

			{
        queryResults.length > 0 ?
        <div className="container">
				<div className="card-container-list row">
					{queryResults.slice(0, paginate).map((film: any) => {
						return (
							<Card
								film={film}
								imageUrl={imageUrl}
								key={film.id}
							/>
						);
					}) 
        }
				</div>
				<div className="card-container-footer">
          {paginate < queryResults.length &&
					<button onClick={handlePaginate}>Más títulos</button>}
				</div>			
       </div>
       : notFound && <div className='notFound'>No se encontraron resultados para tu búsqueda</div>
      }
		</div>
	);
};

export default CardContainer;
