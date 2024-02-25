import heroImg from "./assets/illustration-working.svg";
export default function Hero() {
	return (
		<>
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
						height="482"
						width="733"
					/>
				</div>
			</div>
		</>
	);
}
