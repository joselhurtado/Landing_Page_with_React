import React from "react";
import { NavBar } from "./navbar.js";
import { JumboTron } from "./jumbotron.js";
import { Cards } from "./cards.js";
import { Footer } from "./footer.js";

export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<JumboTron />
				<br />
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
