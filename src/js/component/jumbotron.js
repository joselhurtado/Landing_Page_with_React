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
export const JumboTron = () => {
	return (
		<div className="container mt-5  pr-2">
			<div className="row">
				<div className="col-12  m-auto  ">
					<div className="jumbotron text-white pt-4">
						<h1 className="title">{copy.title}</h1>
						<p className="text">
							{copy.text}
							<br />
							{copy.text2}
							<br />
						</p>
						<a
							className="button jumbotron-button btn mt-3 btn-lg bg-white text-dark font-weight-bold"
							href={copy.button.url}
							role="button">
							{copy.button.label}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
