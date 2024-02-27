import {
	faInstagram,
	faPinterest,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function footer(props) {
	const windowWidth = props.windowWidth;
	return (
		<footer className={windowWidth >= 480 ? "footer" : "footer-mobile"}>
			<div className="footer-logo">Shortify</div>
			<div className="footer-links">
				<ul className="features">
					<li>Features</li>
					<div className="links">
						<ul>
							<li>
								<a href="#">Link Shortening</a>
							</li>
							<li>
								<a href="#">Branded Links</a>
							</li>
							<li>
								<a href="#">Analytics</a>
							</li>
						</ul>
					</div>
				</ul>
				<ul className="resources">
					<li>Resources</li>
					<div className="links">
						<ul>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Developers</a>
							</li>
							<li>
								<a href="#">Support</a>
							</li>
						</ul>
					</div>
				</ul>
				<ul className="company">
					<li>Company</li>
					<div className="links">
						<ul>
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
						</ul>
					</div>
				</ul>
			</div>
			<div className="footer-socials">
				<a href="www.facebook.com/" aria-label="Facebook">
					<FontAwesomeIcon icon={faSquareFacebook} />
				</a>
				<a href="www.twitter.com/" aria-label="Twitter">
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<a href="www.pinterest.com/" aria-label="Pinterest">
					<FontAwesomeIcon icon={faPinterest} />
				</a>
				<a href="www.instagram.com/" aria-label="Instagram">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</footer>
	);
}
