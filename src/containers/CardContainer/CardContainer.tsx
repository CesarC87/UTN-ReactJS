import React, { useContext, useState } from "react";
import Card from "../../components/Card/Card";
import { Context } from "../../context/Context";

import "./CardContainer.scss";

const CardContainer = () => {
	const { setQuery, data, imageUrl } = useContext(Context);
	const [paginate, setPaginate] = useState(12);

	const handleQuerySearch = (e: any) => {
		setQuery(e.target.value);
	};
	const handlePaginate = () => {
		setPaginate((prev) => prev + 12);
	};

	return (
		<div className="container">
			<input type="search" onChange={(e) => handleQuerySearch(e)} />

			<div className="cardContainer row">
				{data?.slice(0, paginate).map((film: any) => {
					let { poster_path } = film;
					return <Card image={`${imageUrl + poster_path}`} key={film.id} />;
				})}
			</div>
			<button onClick={handlePaginate}>Más títulos</button>
		</div>
	);
};

export default CardContainer;
