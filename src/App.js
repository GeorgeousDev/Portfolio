import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import MyProjects from "./pages/MyProjects";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />

			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/Portfolio/" exact>
						<AboutMe/>
					</Route>
					<Route path="/Portfolio/work/" exact>
						<MyProjects />
					</Route>
					<Route path="/Portfolio/work/:id/">
						<MovieDetail />
					</Route>
					<Route path="/Portfolio/contact/">
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
