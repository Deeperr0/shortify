import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShortenedUrl(props) {
	function handleCopy(event) {
		const copyButton = document.getElementById(event.target.id);
		const copyText = document.getElementById(`copy-text-${props.index}`);
		const copiedText = copyText.innerText;
		const originalHTML = copyButton.innerHTML;
		navigator.clipboard.writeText(copiedText);
		copyButton.innerText = "Copied!";

		setTimeout(() => {
			copyButton.innerHTML = originalHTML;
		}, 1500);
	}
	return (
		<div className="shortened-url">
			<p className="shortened-url-link" id={`copy-text-${props.index}`}>
				{props.url}
			</p>
			<button
				className="copy-button"
				id={`copy-button-${props.index}`}
				onClick={handleCopy}>
				Copy <FontAwesomeIcon icon={faClipboard} />
			</button>
		</div>
	);
}
