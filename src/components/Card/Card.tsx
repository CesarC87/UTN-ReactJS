import React from "react";
// import { faHome } from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import "./Card.scss";

const Card = ({ image }: { image: string}) => {
	return (
		<div className="col-2" >
			<div className="card">
        <div className="card-image">
          <img src={`${image}`} alt="imagenPelicula" />
          <span className="raiting">
            <i className="fa-solid fa-clapperboard"></i>
            <span>80%</span>
          </span>
        </div>
        <div className="card-content">
          <h4>Titulo <span>(2002)</span></h4>
        </div>
			</div>
		</div>
	);
};

export default Card;
