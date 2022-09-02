import React, { useContext, useState, useRef } from "react";
import Card from "../Card/Card";
import "./Generos.scss";

import { Context } from "../../context/Context";

const Generos = () => {
	const { queryResults, generos, populares, series, setQueryGenres, notFound  } = useContext(Context);
	const { imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(12);

	const genres = generos.genres;
	const debounce = useRef();

	const handleQuerySearch = (e) => {
		debounce.current && clearTimeout(debounce.current);
		debounce.current = setTimeout(() => {
			setQueryGenres(e.target.value);
		}, 350);
	};

	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};

	return (
		<section>
			<select className="select">
				<option value="0">Seleccione el género</option>
				{genres.map((item)=>{
					return <option key={item.id} value={item.id}>{item.name}</option>
				})}
			</select>

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
			
		</section>
	);
};

export default Generos;
