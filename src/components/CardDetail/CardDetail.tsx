import React, { useContext } from "react";
import "./CardDetail.scss";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Context } from "../../context/Context";
import { url } from "inspector";

const CardDetail = () => {
	const { id } = useParams();
	const { setId, titleDetail, imageUrl } = useContext(Context);
	const img = `${imageUrl + titleDetail.poster_path}`;
	const img2 = `${imageUrl + titleDetail.backdrop_path}`;

	console.log("detail desde detail", titleDetail);

	useEffect(() => {
		setId(id);
	}, [id]);

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
							{titleDetail.release_date &&<p>Fecha de estreno: {titleDetail.release_date}</p>}
						</div>
						{/* <p>Género: {Object.values(titleDetail.genres).join(', ')}</p> */}
					</div>
                    <div className="detail-area">
                        {titleDetail.tagline && <h4>{titleDetail.tagline}</h4>}
					    <p>{titleDetail.overview}</p>

                        <ul>
                            {titleDetail.runtime && <li>Duración: {titleDetail.runtime}</li>}
                            {titleDetail.sopoken_language && <li>Idioma: {titleDetail.sopoken_language}</li>}
                            {titleDetail.original_language && <li>Idioma original: {titleDetail.original_language}</li>}
                        </ul>
                        <ul>
                            {titleDetail.vpte_count && <li>Cantidad de votos: {titleDetail.vote_count}</li>}
                        </ul>

                    </div>

					{/* <p>{titleDetail.adult}</p>
					<p>{titleDetail.imdb_id}</p>
					<p>{titleDetail.popularity}</p>
					<p>{titleDetail.vote_average}</p>
					<p>{titleDetail.vote_count}</p> */}
					{/* {titleDetail.genres} */}
					{/* {titleDetail.production_companies} */}
					{/* {titleDetail.production_countries} */}
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
