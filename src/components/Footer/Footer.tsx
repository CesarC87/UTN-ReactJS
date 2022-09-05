import React from "react";
import { NavLink } from "react-router-dom";
import logoFooter from "../../assets/moviefun-logo-blue.png";
import "./Footer.scss";

const Footer = () => {
	//Logo
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-4 logo-area">
						<a href="/" title="Moviefun">
							<img
								src={logoFooter}
								alt="Moviefun - Tu cine en casa"
							/>
						</a>
					</div>
					<div className="col-6 col-md-4">
						<ul>
							<li>
								<NavLink to="/generos">Géneros</NavLink>
							</li>
							<li>
								<NavLink to="/peliculas">Películas</NavLink>
							</li>
							<li>
								<NavLink to="/series">Series</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6 col-md-4">
						<ul>
							<li>
								<NavLink to="/quienes-somos">¿Quiénes somos?</NavLink>
							</li>
							<li>
								<NavLink to="/">Contacto</NavLink>
							</li>
							<li>
								<NavLink to="/">Instagram</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
