import React from "react";
import { Link } from "react-router-dom";
import "./NoPage.scss";

import { Context } from "../../context/Context";

const NoPage = () => {
	return (
		<div className="nopage-container">
			<div className="container">
				<h3>404</h3>
				<Link to={`/`}>Volver a la home</Link>
			</div>
		</div>
	);
};

export default NoPage;
