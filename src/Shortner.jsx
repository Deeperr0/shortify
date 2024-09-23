import axios from "axios";
import { useState } from "react";

export default function Shortner(props) {
	const windowWidth = props.windowWidth;

	async function shortenLink(event) {
	    event.preventDefault();
	
	    try {
		const url = document.getElementById("url").value;
		if (!url) {
		    throw new Error("URL cannot be empty");
		}
	
		const response = await axios.get(
		    `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
		);
		
		if (response.data.shorturl) {
		    localStorage.setItem(url, response.data.shorturl);
		    window.dispatchEvent(new Event("storageChange"));
		} else {
		    throw new Error("Failed to shorten the URL.");
		}
	    } catch (error) {
		console.error("Error shortening the URL:", error.message);
		alert("An error occurred while shortening the URL. Please try again.");
	    }
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
