import './welcome.scss';
import { useState } from 'react';
import Account from './Models/Account';
import { updateModal } from '../../../store/slices/modal/modal-process';
import { ModalStatus } from '../../../contants/const';
import { store } from '../../../store/store';
// import { Link } from 'react-router-dom';
// import { useAppDispatch } from '../../../hooks/use-redux';
// import { logoutAction } from '../../../services/api-actions';

function Welcome() {
	const [show, setShow] = useState<boolean>(false);
	const handleSignupShow = (e: { preventDefault: () => void }): void => {
		e.preventDefault();
		store.dispatch(updateModal(ModalStatus.SignUp));
		setShow(true);
	};
	const handleLoginShow = (e: { preventDefault: () => void }): void => {
		e.preventDefault();
		store.dispatch(updateModal(ModalStatus.LogIn));
		setShow(true);
	};
	const handleClose = (): void => {
		setShow(false);
	};
	return (
		<body style={{ opacity: 1 }}>
			<header
				id="header"
				className="navbar navbar-expand-lg navbar-end navbar-light"
			>
				<div className="container" style={{ maxWidth: '1140px' }}>
					<nav className="js-mega-menu navbar-nav-wrap hs-menu-initialized hs-menu-horizontal">
						<a
							className="navbar-brand"
							href="../demo-real-estate/index.html"
							aria-label="Front"
						>
							<img
								className="navbar-brand-logo"
								src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/logos/logo.png"
								alt="Logo"
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-default">
								<i className="bi-list" />
							</span>
							<span className="navbar-toggler-toggled">
								<i className="bi-x" />
							</span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavDropdown"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link"
										href="../demo-real-estate/index.html"
									>
										Features
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link "
										href="../demo-real-estate/property-overview.html"
									>
										Plans
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link "
										href="../demo-real-estate/property-overview.html"
									>
										About us
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link "
										href="../demo-real-estate/property-overview.html"
									>
										Careers
									</a>
								</li>
							</ul>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="btn btn-outline-primary btn-transition"
										href="../demo-real-estate/property-seller.html"
										onClick={handleLoginShow}
									>
										Login
									</a>
								</li>
								<li className="nav-item">
									<a
										className="btn btn-primary btn-transition"
										href="../demo-real-estate/property-seller.html"
										onClick={handleSignupShow}
									>
										Get started
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
			<main id="content" role="main">
				<div
					className="container content-space-2"
					style={{ maxWidth: '1140px' }}
				>
					<div className="row justify-content-md-between align-items-sm-center">
						<div className="col-8 col-sm-6 col-md-5 mb-5 mb-sm-0">
							<img
								className="img-fluid"
								src="https://htmlstream.com/front/assets/svg/illustrations/oc-growing.svg"
								alt="Description"
							/>
						</div>

						<div className="col-sm-6">
							<div className="mb-5">
								<h1 className="display-4 mb-3">
									Unlock your
									<br />
									<span className="text-primary text-highlight-warning">
										<span
											className="js-typedjs"
											data-hs-typed-options='{
                        "strings": ["future.", "potential.", "skills."],
                        "typeSpeed": 90,
                        "loop": true,
                        "backSpeed": 30,
                        "backDelay": 2500
                      }'
										>
											skills.
										</span>
										<span
											className="typed-cursor typed-cursor--blink"
											aria-hidden="true"
										>
											|
										</span>
									</span>
								</h1>
								<p className="lead">
									With our platform, you can quantify your
									skills, grow in your role and stay relevant
									on critical topics.
								</p>
							</div>

							<div className="d-grid d-md-flex gap-3 align-items-md-center">
								<a
									className="btn btn-primary"
									href="../page-login.html"
								>
									Start a free trial
								</a>
								<a
									className="video-player video-player-btn"
									href="https://www.youtube.com/watch?v=d4eDWc8g0e0"
									role="button"
									data-fslightbox="youtube-video"
								>
									<span className="video-player-icon shadow-sm me-2">
										<i className="bi-play-fill">{'  '}</i>
									</span>
									How it works
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Account show={show} handleClose={handleClose} />
		</body>
	);
}
export default Welcome;
