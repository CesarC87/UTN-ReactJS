import React, { useContext } from "react";
import "./CardDetail.scss";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Context } from "../../context/Context";
import { url } from "inspector";
import { isTemplateExpression } from "typescript";

const CardDetail = () => {
	const { id } = useParams();
	const { setId, titleDetail, imageUrl } = useContext(Context);
	const img = `${imageUrl + titleDetail.poster_path}`;
	const img2 = `${imageUrl + titleDetail.backdrop_path}`;

	useEffect(() => {
		setId(id);
	}, [id]);

	console.log("Peli: ", titleDetail.production_countries);

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
						<h3>{titleDetail.title}</h3>
						<div>
							<p>{titleDetail.original_title}</p>
							{titleDetail.release_date && (
								<p>
									Fecha de estreno: {titleDetail.release_date}
								</p>
							)}
						</div>
						{titleDetail.genres && (
							<ul className="genres">
								{titleDetail.genres.map((item: any) => {
									return <li key={item.id}>{item.name}</li>;
								})}
							</ul>
						)}
					</div>
					<div className="detail-area">
						{titleDetail.tagline && <h4>{titleDetail.tagline}</h4>}
						<p>{titleDetail.overview}</p>

						{(titleDetail.runtime ||
							titleDetail.spoken_languages ||
							titleDetail.imdb_id) && (
							<ul>
								{titleDetail.runtime && (
									<li><b>Duración:</b> {titleDetail.runtime}</li>
								)}
								{titleDetail.spoken_languages && (
									<li>
										<b>Idioma:&nbsp;</b>
										{
											titleDetail.spoken_languages[0]
												.english_name
										}
									</li>
								)}
								{titleDetail.imdb_id && (
									<li><b>IMDB:</b> {titleDetail.imdb_id}</li>
								)}
							</ul>
						)}
						{(titleDetail.vote_count || titleDetail.adult) && (
							<ul>
								{titleDetail.vote_count && (
									<li><b>Cantidad de votos:</b> {titleDetail.vote_count}</li>
								)}
								{titleDetail.vote_average && <li><b>Promedio de votos: </b> {titleDetail.vote_average}</li>}
								{titleDetail.popularity && <li><b>Popularidad: </b> {titleDetail.popularity}</li>}
								{titleDetail.adult && (
									<li><b>Rating:</b> {titleDetail.adult}</li>
								)}
							</ul>
						)}
						{(titleDetail.production_companies ) && (
							<ul className="companies">
								{titleDetail.production_companies && <li><b>Productoras:</b></li>}
								{titleDetail.production_companies.map(
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
						{(titleDetail.production_countries) && (
							<ul className="companies">
								<li><b>País origen:</b></li>
								{titleDetail.production_countries && <li> 
									{titleDetail.production_countries.map((item: any) =>(
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
