import ShortenedUrl from "./ShortenedUrl.jsx";

export default function ShortenedUrls() {
	const shortenedLinks = [];
	for (let i = localStorage.length - 1; i >= 0; i--) {
		shortenedLinks.push(localStorage.getItem(localStorage.key(i)));
	}
	const filteredShortenedLinks = shortenedLinks.filter(
		(link) => link != "undefined"
	);
	function clear() {
		localStorage.clear();
		location.reload();
	}
	return (
		<div>
			{localStorage.length > 0 && (
				<div className="clear-urls">
					<button onClick={clear}>Clear</button>
				</div>
			)}
			<div className="shortened-urls">
				{filteredShortenedLinks.map((link, index) => (
					<ShortenedUrl key={index} url={link} index={index}></ShortenedUrl>
				))}
			</div>
		</div>
	);
}
