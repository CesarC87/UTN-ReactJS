import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/moviefun-logo.png';
import "./Header.scss";

const Header = () => {
	// Logo
	// Menu
  const active = {
    border: '1px solid white',
    color: 'white',
    padding: '0.5em 2em',
    borderRadius: '15px',
    background: '#17174d',
    fontWeight: '400'
  }
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
								<NavLink to="/" style={({ isActive }) => {									
									return isActive ? active : null}}
									>Home
								</NavLink>
								</li>
								<li>
								<NavLink to="/generos" style={({ isActive }) => {
									return isActive ? active : null}}
									>Géneros
								</NavLink>
								</li>
								<li>
								<NavLink to="/peliculas" style={({ isActive }) => {
									return isActive ? active : null}}
									>Películas
								</NavLink>
								</li>
								<li>
								<NavLink to="/series" style={({ isActive }) => {
									return isActive ? active : null}}
									>Series
								</NavLink>
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
