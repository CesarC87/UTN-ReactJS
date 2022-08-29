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
		<div className="card-container">
			<div className="busador">
				<div className="container">
					<label>
						<span>Encontrá tu película favorita</span>
						<input
							type="search"
							onChange={(e) => handleQuerySearch(e)}
						/>
					</label>
				</div>
			</div>

			<div className="container">
				<div className="card-container-list row">
					{data?.slice(0, paginate).map((film: any) => {
						return (
							<Card
								film={film}
								imageUrl={imageUrl}
								key={film.id}
							/>
						);
					})}
				</div>
				<div className="card-container-footer">
					<button onClick={handlePaginate}>Más títulos</button>
				</div>
			</div>
		</div>
	);
};

export default CardContainer;
