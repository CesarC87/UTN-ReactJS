import React, { useContext, useState, useRef, ChangeEvent } from "react";
import Card from "../../components/Card/Card";
import { Context } from "../../context/Context";

import "./CardContainer.scss";

const CardContainer = () => {
	const { setQuery, queryResults, imageUrl, notFound } = useContext(Context);
	const [paginate, setPaginate] = useState(12);
	const search = useRef(null);
	const debounce = useRef();
	const handleQuerySearch = (e) => {
    debounce.current && clearTimeout( debounce.current )
    debounce.current = setTimeout(()=>{
      setQuery(e.target.value);
    }, 350)
	};
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};

	const handleBorrar = (e) => {
		e.preventDefault();		
    	search.current.value = ''
		setQuery('')
	};
	return (
		<div className="card-container">
			<div className="busador">
				<div className="container">
					<form action="" id="form">
						<label>
							<span>Encontrá tu película favorita</span>
							<div>
								<input
									type="search"
									onChange={(e) => handleQuerySearch(e)}
									id="search"
									className="search"
                  ref={search}
								/>
								<button
									className="borrar"
									onClick={handleBorrar}
								>X</button>
							</div>
						</label>
					</form>
				</div>
			</div>

			{queryResults.length > 0 ? (
				<div className="container">
					<div className="card-container-list row">
						{queryResults.slice(0, paginate).map((film) => {
							return (
								<div
									className="col-6 col-md-4 col-lg-2"
									key={film.id}
								>
									<Card
										film={film}
										imageUrl={imageUrl}
										key={film.id}
									/>
								</div>
							);
						})}
					</div>
					<div className="card-container-footer">
						{paginate < queryResults.length && (
							<button onClick={handlePaginate}>
								Más títulos
							</button>
						)}
					</div>
				</div>
			) : (
				notFound && (
					<div className="notFound">
						No se encontraron resultados para tu búsqueda
					</div>
				)
			)}
		</div>
	);
};

export default CardContainer;
