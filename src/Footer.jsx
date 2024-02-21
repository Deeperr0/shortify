import {
	faInstagram,
	faPinterest,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer() {
	return (
		<footer className="footer">
			<div className="footer-logo">Shortify</div>
			<div className="footer-links">
				<ul className="features">
					<li>Features</li>
					<div className="links">
						<li>
							<a href="#">Link Shortening</a>
						</li>
						<li>
							<a href="#">Branded Links</a>
						</li>
						<li>
							<a href="#">Analytics</a>
						</li>
					</div>
				</ul>
				<ul className="resources">
					<li>Resources</li>
					<div className="links">
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Developers</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
					</div>
				</ul>
				<ul className="company">
					<li>Company</li>
					<div className="links">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Our Team</a>
						</li>
						<li>
							<a href="#">Careers</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</div>
				</ul>
			</div>
			<div className="footer-socials">
				<FontAwesomeIcon icon={faSquareFacebook} />
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faPinterest} />
				<FontAwesomeIcon icon={faInstagram} />
			</div>
		</footer>
	);
}
