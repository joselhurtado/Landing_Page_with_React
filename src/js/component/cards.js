import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="col-3 mb-5  ">
			<div
				className="cards d-flex align-items-center flex-column border border-black border-top-0 mb-5 text-white "
				style={{ width: "220px;" }}>
				<div className="card1" />
				<img
					className="cardImage1"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<h5 className="cardTitle1 pt-1 ">{props.title}</h5>
				<p className="cardText1 p-2">{props.text}</p>

				<a
					href={props.buttonUrl}
					className="cardButton1 btn btn-dark text-white bg-secondary mb-4 mt-2">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
