import React from "react";
import PropTypes from "prop-types";

const data = {
	img:
		"https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png",
	cardTitle: "Card Title",
	cardDescription:
		"Some quick example text to build on the card title and make up the bulk of the cards content.",
	button: {
		url: "https://www.google.com",
		label: "Read More"
	}
};

//Cards
export function Cards(props) {
	return (
		<div className="card mb-5">
			<img
				className="card-img-top"
				src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
}
