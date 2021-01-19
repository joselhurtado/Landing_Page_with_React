import React from "react";

var copy = {
	title: "Hello, world!",
	text1:
		"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
	text2:
		"It uses utility classes for typography and spacing to space content out within the larger container.",
	button: {
		url: "#",
		label: "Read More"
	}
};

// JumboTron
export function JumboTron() {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				<b>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero qliquid similque quaerat nam nobis ilo aspernatur
					vitae fugiat numquam repellat.
				</b>
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
