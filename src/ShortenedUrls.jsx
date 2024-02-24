import ShortenedUrl from "./ShortenedUrl.jsx";

export default function ShortenedUrls() {
	const shortenedLinks = [];
	for (let i = localStorage.length - 1; i >= 0; i--) {
		shortenedLinks.push(localStorage.getItem(localStorage.key(i)));
	}
	return (
		<div className="shortened-urls">
			{shortenedLinks.map((link, index) => (
				<ShortenedUrl key={index} url={link} index={index}></ShortenedUrl>
			))}
		</div>
	);
}
