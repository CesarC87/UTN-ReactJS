import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/moviefun-logo.png';
import "./Header.scss";

const Header = () => {
	// Logo
	// Menu
	return (
		<header className="header">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4 logo">
						<a href="/" title="Moviefun">
							<img
								src={logo}
								alt="Moviefun - Tu cine en casa"
							/>
						</a>
					</div>
					<div className="col-12 col-md-6 col-lg-8">
						<nav>
							<ul>
								<li>
									<Link to="/">Inicio</Link>{" "}
								</li>
								<li>
									<Link to="/">Generos</Link>{" "}
								</li>
								<li>
									<Link to="/">Películas</Link>{" "}
								</li>
								<li>
									<Link to="/">Destacadas</Link>{" "}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
