/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable */

import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/use-redux';
import { loginAction } from '../../../services/api-actions';
import { AuthData } from '../../../types/auth-data';

function Login() {
	localStorage.setItem('rememberMe', 'false');
	const loginRef = useRef<HTMLInputElement | null>(null);
	const password = useRef<HTMLInputElement | null>(null);
	const dispatch = useAppDispatch();

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		if (loginRef.current !== null && password.current !== null) {
			const authData: AuthData = {
				login: loginRef.current.value,
				password: password.current.value,
			};
			// dispatch(loginAction(authData));
		}
	};

	return (
		<main id="content" role="main" className="main pt-0">
			<div className="container-fluid px-3">
				<div className="row">
					<div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
						<div className="position-absolute top-0 start-0 end-0 mt-3 mx-3">
							<div className="d-none d-lg-flex justify-content-between">
								<a href="index.html">
									<img
										className="w-100"
										src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/logos/logo.svg"
										alt="Description"
										data-hs-theme-appearance="default"
										style={{
											minWidth: '7rem',
											maxWidth: '7rem',
										}}
									/>
								</a>
							</div>
						</div>
						<div style={{ maxWidth: '23rem' }}>
							<div className="text-center mb-5">
								<img
									className="img-fluid"
									src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/illustrations/oc-chatting.svg"
									alt="Description"
									style={{ width: '12rem' }}
									data-hs-theme-appearance="default"
								/>
							</div>
							<div className="mb-5">
								<h2 className="display-5">
									Build digital products with:
								</h2>
							</div>
							<ul className="list-checked list-checked-lg list-checked-primary list-py-2">
								<li className="list-checked-item">
									<span className="d-block fw-semi-bold mb-1">
										All-in-one tool
									</span>
									Build, run, and scale your apps - end to end
								</li>
								<li className="list-checked-item">
									<span className="d-block fw-semi-bold mb-1">
										Easily add &amp; manage your services
									</span>
									It brings together your tasks, projects,
									timelines, files and more
								</li>
							</ul>
							<div className="row justify-content-between mt-5 gx-3">
								<div className="col">
									<img
										className="img-fluid"
										src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/gitlab-gray.svg"
										alt="Logo"
									/>
								</div>
								<div className="col">
									<img
										className="img-fluid"
										src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/fitbit-gray.svg"
										alt="Logo"
									/>
								</div>
								<div className="col">
									<img
										className="img-fluid"
										src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/flow-xo-gray.svg"
										alt="Logo"
									/>
								</div>
								<div className="col">
									<img
										className="img-fluid"
										src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/layar-gray.svg"
										alt="Logo"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
						<div
							className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
							style={{ maxWidth: '25rem' }}
						>
							<form
								className="js-validate needs-validation"
								onSubmit={handleSubmit}
							>
								<div className="text-center">
									<div className="mb-5">
										<h1 className="display-5">Sign in</h1>
										<p>
											Don't have an account yet?
											<a
												className="link"
												href="authentication-signup-cover.html"
											>
												Sign up here
											</a>
										</p>
									</div>
									<div className="d-grid mb-4">
										<a
											className="btn btn-white btn-lg"
											href="authentication-login-cover.html#"
										>
											<span className="d-flex justify-content-center align-items-center">
												<img
													className="avatar avatar-xss me-2"
													src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/google-icon.svg"
													alt="Description"
												/>
												Sign in with Google
											</span>
										</a>
									</div>
									<span className="divider-center text-muted mb-4">
										OR
									</span>
								</div>
								<div className="mb-4">
									<label
										className="form-label"
										htmlFor="signinSrEmail"
									>
										Your email
									</label>
									<input
										ref={loginRef}
										type="email"
										className="form-control form-control-lg"
										name="email"
										id="signinSrEmail"
										placeholder="email@address.com"
										aria-label="email@address.com"
										required
									/>
									<span className="invalid-feedback">
										Please enter a valid email address.
									</span>
								</div>
								<div className="mb-4">
									<label
										className="form-label w-100"
										htmlFor="signupSrPassword"
									>
										<span className="d-flex justify-content-between align-items-center">
											<span>Password</span>
											<a
												className="form-label-link mb-0"
												href="authentication-reset-password-cover.html"
											>
												Forgot Password?
											</a>
										</span>
									</label>
									<div
										className="input-group input-group-merge"
										data-hs-validation-validate-class
									>
										<input
											ref={password}
											type="password"
											className="js-toggle-password form-control form-control-lg"
											name="password"
											id="signupSrPassword"
											placeholder="8+ characters required"
											aria-label="8+ characters required"
										/>
										<a
											id="changePassTarget"
											className="input-group-append input-group-text"
											href="/"
										>
											<i
												id="changePassIcon"
												className="bi-eye"
											/>
										</a>
									</div>
									<span className="invalid-feedback">
										Please enter a valid password.
									</span>
								</div>
								<div className="form-check mb-4">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="termsCheckbox"
										onChange={(e) => {
											if (e.target.checked) {
												localStorage.setItem(
													'rememberMe',
													'true'
												);
											} else {
												localStorage.setItem(
													'rememberMe',
													'false'
												);
											}
										}}
									/>
									<label
										className="form-check-label"
										htmlFor="termsCheckbox"
									>
										Remember me
									</label>
								</div>
								<div className="d-grid">
									<button
										type="submit"
										className="btn btn-primary btn-lg"
									>
										Sign in
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Login;
