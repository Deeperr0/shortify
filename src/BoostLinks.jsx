export default function BoostLinks(props) {
	const windowWidth = props.windowWidth;
	return (
		<div className={windowWidth >= 480 ? "boost-links" : "boost-links-mobile"}>
			<div className="boost-links-content">
				<h2 className="boost-links-title">Boost your links today</h2>
				<button className="boost-links-button"> Get Started </button>
			</div>
		</div>
	);
}
