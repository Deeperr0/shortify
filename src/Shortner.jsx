export default function Shortner() {
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
				<button className="shortner-button" type="submit">
					Shorten It!
				</button>
			</form>
		</div>
	);
}
