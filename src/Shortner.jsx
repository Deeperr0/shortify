import axios from "axios";
import { useState } from "react";

export default function Shortner(props) {
	const windowWidth = props.windowWidth;

	async function shortenLink(event) {
		event.preventDefault();

		const url = document.getElementById("url").value;
		const response = await axios.get(
			`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
		);
		localStorage.setItem(url, response.data.shorturl);
		window.dispatchEvent(new Event("storageChange"));
	}

	return (
		<div className={windowWidth >= 811 ? "shortner" : "shortner-mobile"}>
			<form>
				<input
					placeholder="Shorten a link here..."
					type="url"
					name="url"
					id="url"
					className="shortner-url"
				/>
				<button
					className="shortner-button"
					type="submit"
					onClick={shortenLink}
					id="shortner-button">
					Shorten It!
				</button>
			</form>
		</div>
	);
}
