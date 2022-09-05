import React from "react";
import { Link } from "react-router-dom";
import "./NoPage.scss";

const NoPage = () => {
	return (
		<div className="nopage-container">
			<div className="container">
				<Link to={`/`}>Volver a la home</Link>
			</div>
		</div>
	);
};

export default NoPage;
