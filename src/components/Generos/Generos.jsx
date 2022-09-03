import React, { useContext, useState, useRef } from "react";
import Card from "../Card/Card";
import "./Generos.scss";
import { Context } from "../../context/Context";

const Generos = () => {
	const { setIdGenres , movies } = useContext(Context);
	const { imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(12);
	
	const genres = movies.generos.genres;
	const queryGenres = movies.queryGenres
	const search = useRef(null);

	const handleQueryGenres = (e) => {			
		setIdGenres(e.target.value);
	};
	
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};	
	
	return (
		<section>
			<select className="select" onChange={(e) => handleQueryGenres(e)} ref={search}>
				<option value="0">Seleccione el género</option>
				{genres?.map((item)=>{
					return <option key={item.id} value={item.id}>{item.name}</option>
				})}
			</select>

			{(queryGenres && queryGenres.length > 0) ? (
				<div className="container">
					<div className="card-container-list row">
						{queryGenres.slice(0, paginate).map((film) => {
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
						{paginate < queryGenres.length && (
							<button onClick={handlePaginate}>
								Más títulos
							</button>
						)}
					</div>
				</div>
			) : (
				movies.notFound && (
					<div className="notFound">
						No se encontraron resultados para tu búsqueda
					</div>
				)
			)}
			
		</section>
	);
};

export default Generos;
