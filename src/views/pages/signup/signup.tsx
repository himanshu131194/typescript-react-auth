/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable */
import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../../hooks/use-redux';
// import { signinAction } from '../../../services/api-actions';
// import { IRegisterRequest } from '../../../types/auth.types';

function Signup() {
	const fullName = useRef<HTMLInputElement | null>(null);
	const email = useRef<HTMLInputElement | null>(null);
	const password = useRef<HTMLInputElement | null>(null);
	const confirmPassword = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		// evt.preventDefault();
		// if (
		// 	fullName.current !== null &&
		// 	email.current !== null &&
		// 	password.current !== null &&
		// 	confirmPassword.current !== null
		// ) {
		// 	const accountData: IRegisterRequest = {
		// 		name: fullName.current.value,
		// 		email: email.current.value,
		// 		password: password.current.value,
		// 	};
		// 	dispatch(signinAction(accountData));
		// }
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
										<h1 className="display-5">
											Create your account
										</h1>
										<p>
											Already have an account?{' '}
											<a
												className="link"
												href="./authentication-login-cover.html"
											>
												Sign in here
											</a>
										</p>
									</div>

									<div className="d-grid mb-4">
										<a
											className="btn btn-white btn-lg"
											href="/"
										>
											<span className="d-flex justify-content-center align-items-center">
												<img
													className="avatar avatar-xss me-2"
													src="https://htmlstream-assets.s3.ap-south-1.amazonaws.com/assets/svg/brands/google-icon.svg"
													alt="Description"
												/>
												Sign up with Google
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
										htmlFor="fullNameSrEmail"
									>
										Full Name
									</label>
									<input
										ref={fullName}
										type="text"
										className="form-control form-control-lg"
										name="fullName"
										id="fullNameSrEmail"
										placeholder="Mark Williams"
										aria-label="Mark Williams"
										required
									/>
									<span className="invalid-feedback">
										Please enter your first name.
									</span>
								</div>
								<div className="mb-4">
									<label
										className="form-label"
										htmlFor="signupSrEmail"
									>
										Your email
									</label>
									<input
										ref={email}
										type="email"
										className="form-control form-control-lg"
										name="email"
										id="signupSrEmail"
										placeholder="Markwilliams@site.com"
										aria-label="Markwilliams@site.com"
										required
									/>
									<span className="invalid-feedback">
										Please enter a valid email address.
									</span>
								</div>
								<div className="mb-4">
									<label
										className="form-label"
										htmlFor="signupSrPassword"
									>
										Password
									</label>

									<div className="input-group input-group-merge">
										<input
											ref={password}
											type="password"
											className="js-toggle-password form-control form-control-lg"
											name="password"
											id="signupSrPassword"
											placeholder="8+ characters required"
											aria-label="8+ characters required"
											minLength={8}
											required
										/>
										<a
											className="js-toggle-password-target-1 input-group-append input-group-text"
											href="/"
										>
											<i className="js-toggle-password-show-icon-1 bi-eye-slash" />
										</a>
									</div>

									<span className="invalid-feedback">
										Your password is invalid. Please try
										again.
									</span>
								</div>
								<div className="mb-4">
									<label
										className="form-label"
										htmlFor="signupSrConfirmPassword"
									>
										Confirm password
									</label>

									<div className="input-group input-group-merge">
										<input
											ref={confirmPassword}
											type="password"
											className="js-toggle-password form-control form-control-lg"
											name="confirmPassword"
											id="signupSrConfirmPassword"
											placeholder="8+ characters required"
											aria-label="8+ characters required"
											required
											minLength={8}
										/>
										<a
											className="js-toggle-password-target-2 input-group-append input-group-text"
											href="/"
										>
											<i className="js-toggle-password-show-icon-2 bi-eye-slash" />
										</a>
									</div>

									<span className="invalid-feedback">
										Password does not match the confirm
										password.
									</span>
								</div>
								<div className="form-check mb-4">
									<input
										className="form-check-input"
										type="checkbox"
										value=""
										id="termsCheckbox"
										required
									/>
									<label
										className="form-check-label"
										htmlFor="termsCheckbox"
									>
										I accept the{' '}
										<a href="/">Terms and Conditions</a>
									</label>
									<span className="invalid-feedback">
										Please accept our Terms and Conditions.
									</span>
								</div>
								<div className="d-grid gap-2">
									<button
										type="submit"
										className="btn btn-primary btn-lg"
									>
										Create an account
									</button>
									<button
										type="submit"
										className="btn btn-link"
									>
										or Start your 30-day trial{' '}
										<i className="bu-chevron-right" />
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

export default Signup;
