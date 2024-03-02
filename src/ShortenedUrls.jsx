import ShortenedUrl from "./ShortenedUrl.jsx";
import { useEffect, useState } from "react";

export default function ShortenedUrls(props) {
	const [localStorageLength, setLocalStorageLength] = useState(
		localStorage.length
	);
	useEffect(() => {
		const handleStorageChange = () => {
			// Update the state with the new localStorage length
			setLocalStorageLength(localStorage.length);
			console.log(localStorage.length);
		};

		// Listen for the storage event
		window.addEventListener("storageChange", handleStorageChange);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("storageChange", handleStorageChange);
		};
	}, []);
	const shortenedLinks = [];
	for (let i = localStorage.length - 1; i >= 0; i--) {
		shortenedLinks.push(localStorage.getItem(localStorage.key(i)));
	}
	const filteredShortenedLinks = shortenedLinks.filter(
		(link) => link != "undefined"
	);
	function clear() {
		localStorage.clear();
		window.dispatchEvent(new Event("storageChange"));
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
