import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import "./Series.scss";

import { Context } from "../../context/Context";

const Series = () => {
	const { imageUrl, notFound, series } = useContext(Context);
	const [paginate, setPaginate] = useState(12);
	
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};

	return (
		<div className="card-container">
			{series.length > 0 ? (
				<div className="container">
					<h3>Series</h3>
					<div className="card-container-list row">
						{series.slice(0, paginate).map((film) => {
							return (
								<div
									className="col-6 col-md-4 col-lg-2"
									key={film.id}
								>
									<Card
										film={film}
										imageUrl={imageUrl}
										key={film.id}
										type='tv'
									/>
								</div>
							);
						})}
					</div>
					<div className="card-container-footer">
						{paginate < series.length && (
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


export default Series;
