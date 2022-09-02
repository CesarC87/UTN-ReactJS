import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

import imagenReemplazo from "../../assets/moviefun-replace.jpg";
import "./Card.scss";

const Card = ({ film, imageUrl, type }: { film: any; imageUrl: any, type:string }) => {
	// console.log('Film: ', film);
	const vote_average = Number(film.vote_average) * 10;
	const color = "hsl(32, 100%, " + (vote_average * 0.5 + 50) + "%)";
	const vote_color = { color: color };
	const titleId = film.id;

	console.log('film: ', film);

	return (
		<Link to={`/title/${titleId}/${type}`}>
			<div
				className="card"
				onClick={() => {
					console.log("Detale pelicula");
				}}
			>
				<div className="card-image">
					<div>
						{film.poster_path == null ? (
							<img src={imagenReemplazo} alt={film.title} />
						) : (
							<img
								src={imageUrl + film.poster_path}
								alt={film.title}
							/>
						)}
					</div>
					<span className="raiting">
						<FontAwesomeIcon
							icon={faClapperboard}
							className="icon"
							style={vote_color}
						/>
						<span>{vote_average}%</span>
					</span>
				</div>
				<div className="card-content">
					<h4>
						{film.title}
						{film.name}
						{film.release_date &&
							film.release_date !== undefined && (
								<span>
									&nbsp;({film.release_date.substring(0, 4)})
								</span>
							)}
						{film.first_air_date &&
							film.first_air_date !== undefined && (
								<span>
									&nbsp;({film.first_air_date.substring(0, 4)})
								</span>
							)}
					</h4>
				</div>
			</div>
		</Link>
	);
};

export default Card;
