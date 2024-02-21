import "./App.css";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Shortner from "./Shortner.jsx";
import Statistics from "./Statistics.jsx";
import Footer from "./Footer.jsx";
import BoostLinks from "./BoostLinks.jsx";
function App() {
	return (
		<>
			<div>
				<Navbar />
				<Hero />
				<Shortner />
				<Statistics />
				<BoostLinks />
				<Footer />
			</div>
		</>
	);
}

export default App;
