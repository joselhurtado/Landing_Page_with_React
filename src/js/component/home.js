import React from "react";
import { NavBar } from "./navbar";
import { JumboTron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

// NavBar
export function Home() {
	return (
		<>
			<NavBar />
			<JumboTron />
			<Cards />
			<Footer />
		</>
	);
}
