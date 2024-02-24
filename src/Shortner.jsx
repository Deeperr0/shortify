import axios from "axios";

export default function Shortner() {
	async function shortenLink(event) {
		event.preventDefault();

		const url = document.getElementById("url").value;
		const response = await axios.get(
			`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`
		);
		localStorage.setItem(url, response.data.shorturl);
		location.reload();
	}

	return (
		<div className="shortner">
			<form>
				<input
					placeholder="Shorten a link here..."
					type="url"
					name="url"
					id="url"
					className="shortner-url"
				/>
				<button className="shortner-button" type="submit" onClick={shortenLink}>
					Shorten It!
				</button>
			</form>
		</div>
	);
}
