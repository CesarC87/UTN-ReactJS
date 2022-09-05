import React, { useContext } from "react";
import "./CardDetail.scss";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Context } from "../../context/Context";

const CardDetail = () => {
	
	const { id, type } = useParams();
	const { setId, imageUrl, setType , movies} = useContext(Context);
	const img = `${imageUrl + movies.titleDetail.poster_path}`;
	const img2 = `${imageUrl + movies.titleDetail.backdrop_path}`;

	useEffect(() => {
		setId(id);
		setType(type)
	}, [id, type, setId, setType]);

	// console.log("Peli: ", titleDetail);

	return (
		<div className="cardDetail" style={{ backgroundImage: `url(${img2})` }}>
			<div className="cardDetail__container container">
				<div className="cardDetail__izq col-12 col-md-4 col-lg-3">
					<div className="cardDetail__izq--imgContainer">
						<img src={`${img}`} alt="" />
					</div>
				</div>
				<div className="cardDetail__der col-12 col-md-8 col-lg-9">
					<div className="title-area">
						{movies.titleDetail.title && <h3>{movies.titleDetail.title}</h3>}
						{movies.titleDetail.name && <h3>{movies.titleDetail.name}</h3>}
						<div>
							{movies.titleDetail.original_title && <p>{movies.titleDetail.original_title}</p>}
							{movies.titleDetail.original_name && <p>{movies.titleDetail.original_name}</p>}
							{movies.titleDetail.release_date && (
								<p>
									Fecha de estreno: {movies.titleDetail.release_date}
								</p>
							)}
							{movies.titleDetail.first_air_date && (
								<p>
									Fecha de estreno: {movies.titleDetail.first_air_date}
								</p>
							)}
						</div>
						{movies.titleDetail.genres && (
							<ul className="genres">
								{movies.titleDetail.genres.map((item: any) => {
									return <li key={item.id}>{item.name}</li>;
								})}
							</ul>
						)}
					</div>
					<div className="detail-area">
						{movies.titleDetail.tagline && <h4>{movies.titleDetail.tagline}</h4>}
						<p>{movies.titleDetail.overview}</p>

						{(movies.titleDetail.runtime ||
							movies.titleDetail.spoken_languages ||
							movies.titleDetail.imdb_id) && (
							<ul>
								{movies.titleDetail.runtime && (
									<li><b>Duración:</b> {movies.titleDetail.runtime}</li>
								)}
								{movies.titleDetail.spoken_languages && (
									<li>
										<b>Idioma:&nbsp;</b>
										{
											movies.titleDetail.spoken_languages[0]
												.english_name
										}
									</li>
								)}
								{movies.titleDetail.imdb_id && (
									<li><b>IMDB:</b> {movies.titleDetail.imdb_id}</li>
								)}
							</ul>
						)}
						{(movies.titleDetail.vote_count || movies.titleDetail.adult) && (
							<ul>
								{movies.titleDetail.vote_count && (
									<li><b>Cantidad de votos:</b> {movies.titleDetail.vote_count}</li>
								)}
								{movies.titleDetail.vote_average && <li><b>Promedio de votos: </b> {movies.titleDetail.vote_average}</li>}
								{movies.titleDetail.popularity && <li><b>Popularidad: </b> {movies.titleDetail.popularity}</li>}
								{movies.titleDetail.adult && (
									<li><b>Rating:</b> {movies.titleDetail.adult}</li>
								)}
							</ul>
						)}
						{(movies.titleDetail.production_companies ) && (
							<ul className="companies">
								{movies.titleDetail.production_companies && <li><b>Productoras:</b></li>}
								{movies.titleDetail.production_companies.map(
									(item: any) => (
										<li key={item.id}>
											{item.logo_path && <span>
												<img src={`${imageUrl + item.logo_path}`} alt={item.name}  />
												</span>}
											{item.name}
										</li>
									)
								)}
							</ul>
						)}
						{(movies.titleDetail.production_countries) && (
							<ul className="companies">
								<li><b>País origen:</b></li>
								{movies.titleDetail.production_countries && <li> 
									{movies.titleDetail.production_countries.map((item: any) =>(
										<li key={item.iso_3166_1}>{item.name}</li>
									))}
								</li>}
							</ul>
						)}

					</div>

					
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
