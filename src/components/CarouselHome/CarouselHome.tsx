import React, { useContext,  } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Context } from "../../context/Context";
import Card from "../Card/Card";
import "./CarouselHome.scss";

const CarouselHome = ({ listado, titulo, type }: { listado: any; titulo: any, type: string }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const { imageUrl } = useContext(Context);

	return (
		<div className="carousel-container">
			<div className="container">
				<h3>{titulo}</h3>
				<div className="carousel-container-list row">
					<Carousel
						additionalTransfrom={0}
						arrows
						autoPlaySpeed={3000}
						centerMode={false}
						draggable={true}
						focusOnSelect={true}
						infinite={false}
						itemClass="carousel-item-padding-40-px"
						keyBoardControl={true}
						minimumTouchDrag={80}
						pauseOnHover
						responsive={responsive}
						rewind={false}
						rewindWithAnimation={false}
						rtl={false}
						shouldResetAutoplay
						showDots={false}
						swipeable={true}
					>
						{listado?.slice(0, 10).map((film: any) => {
							return (
								<Card
									film={film}
									imageUrl={imageUrl}
									key={film.id}
									type={type}
								/>
							);
						})}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default CarouselHome;
