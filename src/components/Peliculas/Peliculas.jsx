import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import "./Peliculas.scss";

import { Context } from "../../context/Context";

const Peliculas = () => {
	const { imageUrl, notFound, movies } = useContext(Context);
	const [paginate, setPaginate] = useState(12);
	
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};

	return (
		<div className="card-container">
			{movies.populares.length > 0 ? (
				<div className="container">
					<h3>Películas</h3>
					<div className="card-container-list row">
						{movies.populares.slice(0, paginate).map((film) => {
							return (
								<div
									className="col-6 col-md-4 col-lg-2"
									key={film.id}
								>
									<Card
										film={film}
										imageUrl={imageUrl}
										key={film.id}
										type='movie'
									/>
								</div>
							);
						})}
					</div>
					<div className="card-container-footer">
						{paginate < movies.populares.length && (
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


export default Peliculas;
