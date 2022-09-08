import React from "react";
import "./QuienesSomos.scss";

import cesar from "../../assets/cesar.jpg";
import rod from "../../assets/rod.jpg";

const NoPage = () => {
	return (
		<div className="quienes-somos-container">
			<div className="container">
				<div className="col-12 col-md-6">
					<div className="persona">
						<img src={cesar} alt="César Carabetta" />
						<h3>César Carabetta</h3>
						<p>
							Me encuentro en la etapa final de la carrera de full
							stack developer, dictada por la academia online
							Coderhouse, además de haber realizado (y seguir
							realizando) cursos en otras plataformas (Coursera,
							Harvard's CS50, Linkedin Courses, etc). Me enfoco
							principalmente en el área de front end, siendo que
							comencé a estudiar las principales tecnologías de
							desarrollo web hace poco más de 2 años.{" "}
						</p>
						<p>
							Poseo competencias en inglés, francés e italiano,
							siendo inglés el idioma de mayor proficiencia.{" "}
						</p>
						<p>
							<a
								href="https://www.linkedin.com/in/cesar-carabetta/"
								target="_blank"
								title="Leer más sobre César Carabetta"
							>
								Leer más
							</a>
						</p>
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="persona">
						<img src={rod} alt="Rod Dominguez" />
						<h3>Rod Dominguez</h3>
						<p>
							Es Maquetador web autodidacta, dinámico, con muy
							buena predisposición y en constante aprendizaje.
							Vive en Buenos Aires, ARG. Realmente le apasiona lo
							que hace.
						</p>
						<p>
							Trabaja como maquetador web y diseñador multimedia.
							Lo suelen considerar una persona pro-activa,
							responsable y organizada. Emplea diversas
							metodologías agiles y scrum. Se enfoca en desarrollar
							templates web modernos, con HTML5, CSS3, SASS y
							Bootstrap. Con su trabajo ayuda a crear una web
							profesional y accesible a todos los dispositivos,
							teniendo en cuenta el SEO, UX y UI.
						</p>
						<p>
							<a
								href="https://www.linkedin.com/in/roddom/"
								target="_blank"
								title="Leer más sobre Rod Dominguez"
							>
								Leer más
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NoPage;
