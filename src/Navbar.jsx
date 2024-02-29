import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function Navbar(props) {
	const windowWidth = props.windowWidth;
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const toggleSideMenu = () => {
		setIsSideMenuOpen(!isSideMenuOpen);
	};

	let navbar = null;
	if (windowWidth < 811) {
		navbar = (
			<>
				<nav className="navbar-mobile">
					<h1 className="navbar-logo">Shortify</h1>
					<FontAwesomeIcon
						icon={faBars}
						className="navbar-menu"
						onClick={toggleSideMenu}
					/>
				</nav>
				{isSideMenuOpen && (
					<div className="navbar-side-menu">
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="navbar-close-menu"
							onClick={toggleSideMenu}
						/>
						<ul className="navbar-side-links">
							<li>
								<a href="/features">Features</a>
							</li>
							<li>
								<a href="/pricing">Pricing</a>
							</li>
							<li>
								<a href="/resources">Resources</a>
							</li>
						</ul>
						<ul className="navbar-side-buttons">
							<li>
								<button className="navbar-side-login-button">Login</button>
							</li>
							<li>
								<button className="navbar-side-signup-button">Sign Up</button>
							</li>
						</ul>
					</div>
				)}
			</>
		);
	} else {
		navbar = (
			<nav className="navbar">
				<h1 className="navbar-logo">Shortify</h1>
				<ul className="navbar-links">
					<li>
						<a href="/features">Features</a>
					</li>
					<li>
						<a href="/pricing">Pricing</a>
					</li>
					<li>
						<a href="/resources">Resources</a>
					</li>
				</ul>
				<ul className="navbar-buttons">
					<li>
						<button className="navbar-login-button">Login</button>
					</li>
					<li>
						<button className="navbar-signup-button">Sign Up</button>
					</li>
				</ul>
			</nav>
		);
	}

	return <>{navbar}</>;
}
