import "./App.css";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Shortner from "./Shortner.jsx";
import Statistics from "./Statistics.jsx";
import Footer from "./Footer.jsx";
import BoostLinks from "./BoostLinks.jsx";
import { useEffect } from "react";
import { useState } from "react";
function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<>
			<div>
				<Navbar windowWidth={windowWidth} />
				<Hero windowWidth={windowWidth} />
				<Shortner windowWidth={windowWidth} />
				<Statistics windowWidth={windowWidth} />
				<BoostLinks windowWidth={windowWidth} />
				<Footer windowWidth={windowWidth} />
			</div>
		</>
	);
}

export default App;
