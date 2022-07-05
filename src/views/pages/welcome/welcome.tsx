function Welcome() {
	return (
		<body className="footer-offset" style={{ opacity: 1 }}>
			<header
				id="header"
				className="navbar navbar-expand-lg navbar-bordered bg-white"
			>
				<div className="container">
					<nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
						<a
							className="navbar-brand"
							href="./index.html"
							aria-label="Front"
						>
							<img
								className="navbar-brand-logo"
								src="./assets/svg/logos/logo.svg"
								alt="Logo"
								data-hs-theme-appearance="default"
							/>
							<img
								className="navbar-brand-logo"
								src="./assets/svg/logos-light/logo.svg"
								alt="Logo"
								data-hs-theme-appearance="dark"
							/>
						</a>
						<div
							className="collapse navbar-collapse"
							id="navbarContainerNavDropdown"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link "
										href="./documentation/index.html"
										data-placement="left"
									>
										<i className="bi-book dropdown-item-icon" />
										Docs
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
			<main id="content" role="main" className="main">
				<div className="content container">container</div>
				<div className="footer">
					<div className="row justify-content-between align-items-center">
						<div className="col">
							<p className="fs-6 mb-0">
								© Front.{' '}
								<span className="d-none d-sm-inline-block">
									2022 Htmlstream.
								</span>
							</p>
						</div>
						<div className="col-auto">
							<div className="d-flex justify-content-end">
								<ul className="list-inline list-separator">
									<li className="list-inline-item">
										<a
											className="list-separator-link"
											href="/"
										>
											FAQ
										</a>
									</li>
									<li className="list-inline-item">
										<a
											className="list-separator-link"
											href="/"
										>
											License
										</a>
									</li>
									<li className="list-inline-item">
										<button
											className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle"
											type="button"
											data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasKeyboardShortcuts"
											aria-controls="offcanvasKeyboardShortcuts"
										>
											<i className="bi-command" />
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</main>
		</body>
	);
}
export default Welcome;
