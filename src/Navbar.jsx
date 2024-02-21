export default function Navbar() {
	return (
		<>
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
		</>
	);
}
