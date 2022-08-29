import React from "react";
import logoFooter from '../../assets/moviefun-logo-blue.png';
import "./Footer.scss";

const Footer = () => {
	//Logo
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-4">
						<a href="/" title="Moviefun">
							<img
								src={logoFooter}
								alt="Moviefun - Tu cine en casa"
							/>
						</a>
					</div>
					<div className="col-4">
						<ul>
							<li>Género</li>
							<li>Película</li>
							<li>Serie</li>
						</ul>
					</div>
					<div className="col-4">
						<ul>
							<li>¿Quienes somos?</li>
							<li>Contacto</li>
							<li>Redes</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
