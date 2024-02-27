import heroImg from "./assets/illustration-working.svg";
import smallHeroImg from "./assets/small-illustration.svg";
export default function Hero(props) {
	const windowWidth = props.windowWidth;
	let hero = null;
	if (windowWidth >= 480) {
		hero = (
			<div className="hero">
				<div className="hero-left">
					<h2 className="hero-title">More than just shorter links</h2>
					<p className="hero-text">
						Build your brand's recognition and get detailed insights on how your
						links are performing.
					</p>
					<button className="hero-get-started-button">Get Started</button>
				</div>
				<div className="hero-right">
					<img
						src={heroImg}
						alt="illustration-working"
						className="hero-image"
					/>
				</div>
			</div>
		);
	} else {
		hero = (
			<div className="hero-mobile">
				<img src={heroImg} alt="illustration-working" className="hero-image" />
				<h2 className="hero-title">More than just shorter links</h2>
				<p className="hero-text">
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="hero-get-started-button">Get Started</button>
			</div>
		);
	}
	return <>{hero}</>;
}
