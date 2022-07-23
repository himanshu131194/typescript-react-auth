/* eslint-disable */
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch } from '../../../../hooks/use-redux';
import { signinAction } from '../../../../services/api-actions';
import {
	ITutionUserForm,
	ITutionUserRequest,
} from '../../../../types/users.types';
import { ASSETS_BASE_URL } from '../../../../contants/const';

type DefaultProps = {
	show: boolean;
	handleClose: () => void;
};
type CoverImages = 'create' | 'otp';
const CoverImagesUrls: Record<CoverImages, string> = {
	create: 'assets/svg/illustrations/oc-looking-for-answers.svg',
	otp: 'assets/svg/illustrations/oc-unlock.svg',
};

function Account({ show, handleClose }: DefaultProps) {
	const [steps, setSteps] = useState<CoverImages>('create');
	const dispatch = useAppDispatch();
	const initialFormValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		role: '',
		isAgreedChecked: false,
	} as ITutionUserForm;

	const validationSchema = yup.object().shape({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string().required('Last name is required'),
		email: yup
			.string()
			.email('Incorrect email')
			.required('Email is required'),
		phone: yup
			.string()
			.matches(
				/(^(\+91[\-\s]?)?(\91[\-\s]?)?[0]?(91)?[123456789]\d{9}$)/,
				'Phone number is not valid'
			)
			.required('Phone is required')
			.min(10)
			.max(10),

		role: yup.string().required(),
		isAgreedChecked: yup.boolean().oneOf([true]).required(),
	});

	const submitHandler = (values: ITutionUserForm) => {
		const tutionData: ITutionUserRequest = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			phone: values.phone,
			role: values.role,
		};
		dispatch(signinAction(tutionData));
	};

	const OtpModel: React.FC = () => (
		<div className="card card-lg">
			<div className="card-body text-center">
				<div className="mb-5">
					<h1 className="display-5">2-step Verification</h1>
					<p className="mb-0">
						We sent a verification code to your email.
					</p>
					<p>Enter the code from the email in the field below.</p>
				</div>
				<div className="row gx-2 gx-sm-3">
					<div className="col">
						<div className="mb-4">
							<input
								type="text"
								className="form-control form-control-single-number"
								name="code1"
								id="twoStepVerificationSrCodeInput1"
								placeholder=""
								aria-label=""
								maxLength={1}
								autoComplete="off"
								autoCapitalize="off"
								spellCheck="false"
								autoFocus={true}
							/>
						</div>
					</div>
					<div className="col">
						<div className="mb-4">
							<input
								type="text"
								className="form-control form-control-single-number"
								name="code2"
								id="twoStepVerificationSrCodeInput2"
								placeholder=""
								aria-label=""
								maxLength={1}
								autoComplete="off"
								autoCapitalize="off"
								spellCheck="false"
							/>
						</div>
					</div>
					<div className="col">
						<div className="mb-4">
							<input
								type="text"
								className="form-control form-control-single-number"
								name="code3"
								id="twoStepVerificationSrCodeInput3"
								placeholder=""
								aria-label=""
								maxLength={1}
								autoComplete="off"
								autoCapitalize="off"
								spellCheck="false"
							/>
						</div>
					</div>
					<div className="col">
						<div className="mb-4">
							<input
								type="text"
								className="form-control form-control-single-number"
								name="code4"
								id="twoStepVerificationSrCodeInput4"
								placeholder=""
								aria-label=""
								maxLength={1}
								autoComplete="off"
								autoCapitalize="off"
								spellCheck="false"
							/>
						</div>
					</div>
				</div>
				<div className="d-grid mb-3">
					<button type="submit" className="btn btn-primary btn-lg">
						Verify my account
					</button>
				</div>
				<div className="text-center">
					<p>
						Haven't received it? <a href="#">Resend a new code.</a>
					</p>
				</div>
			</div>
		</div>
	);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>
					<h1>
						Digitize your school in minutes with our integrated
						platform
					</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="row">
					<div className="col-md-6 mb-4 mb-md-0">
						<img
							className="img-fluid"
							src={`${ASSETS_BASE_URL}${CoverImagesUrls[steps]}`}
							alt="Description"
						/>
					</div>
					<div className="col-md-6">
						{steps === 'otp' ? (
							<OtpModel />
						) : (
							<Formik
								initialValues={initialFormValues}
								validationSchema={validationSchema}
								onSubmit={submitHandler}
							>
								{({
									values,
									errors,
									handleChange,
									handleSubmit,
								}) => {
									return (
										<form
											className="js-validate needs-validation"
											onSubmit={handleSubmit}
										>
											<div className="card">
												<div className="card-body">
													<div className="row gx-3">
														<div className="col-sm-6">
															<div className="mb-4">
																<label
																	className="form-label"
																	htmlFor="firstName"
																>
																	First name
																</label>
																<input
																	type="text"
																	className={
																		'form-control form-control-lg' +
																		(values
																			.firstName
																			.length >
																		0
																			? ' is-valid'
																			: errors.firstName
																			? ' is-invalid'
																			: '')
																	}
																	name="firstName"
																	id="firstName"
																	value={
																		values.firstName
																	}
																	onChange={
																		handleChange
																	}
																	placeholder="First name"
																	aria-label="First name"
																/>
																<span className="invalid-feedback">
																	Please enter
																	your first
																	name
																</span>
															</div>
														</div>
														<div className="col-sm-6">
															<div className="mb-4">
																<label
																	className="form-label"
																	htmlFor="lastName"
																>
																	Last name
																</label>
																<input
																	type="text"
																	className={
																		'form-control form-control-lg' +
																		(values
																			.lastName
																			.length >
																		0
																			? ' is-valid'
																			: errors.lastName
																			? ' is-invalid'
																			: '')
																	}
																	name="lastName"
																	id="lastName"
																	value={
																		values.lastName
																	}
																	onChange={
																		handleChange
																	}
																	placeholder="Last name"
																	aria-label="Last name"
																/>
																<span className="invalid-feedback">
																	Please enter
																	your last
																	name
																</span>
															</div>
														</div>
													</div>
													<div className="mb-4">
														<label
															className="form-label"
															htmlFor="email"
														>
															Email address
														</label>
														<input
															type="email"
															className={
																'form-control form-control-lg' +
																(errors.email
																	? ' is-invalid'
																	: values.email
																	? ' is-valid'
																	: '')
															}
															name="email"
															id="email"
															value={values.email}
															onChange={
																handleChange
															}
															placeholder="email@site.com"
															aria-label="email@site.com"
														/>
														<span className="invalid-feedback">
															Please enter your
															email address
														</span>
													</div>
													<div className="row gx-3">
														<div className="col-sm-6">
															<div className="mb-4">
																<label
																	className="form-label"
																	htmlFor="phone"
																>
																	Phone
																</label>
																<input
																	type="text"
																	className={
																		'form-control form-control-lg' +
																		(errors.phone
																			? ' is-invalid'
																			: values
																					.phone
																					.length >
																			  0
																			? ' is-valid'
																			: '')
																	}
																	name="phone"
																	id="phone"
																	value={
																		values.phone
																	}
																	onChange={
																		handleChange
																	}
																	placeholder="+91XXXXXXXXX"
																/>
																<span className="invalid-feedback">
																	Please enter
																	your phone
																	no
																</span>
															</div>
														</div>
														<div className="col-sm-6">
															<div className="mb-4">
																<label
																	className="form-label"
																	htmlFor="role"
																>
																	Role
																</label>
																<select
																	className={
																		'form-select' +
																		(values
																			.role
																			.length >
																		0
																			? ' is-valid'
																			: errors.role
																			? ' is-invalid'
																			: '')
																	}
																	id="role"
																	name="role"
																	value={
																		values.role
																	}
																	onChange={
																		handleChange
																	}
																>
																	<option defaultValue="">
																		Select
																		Role
																	</option>
																	<option value="teacher">
																		Teacher
																	</option>
																	<option value="student">
																		Student
																	</option>
																	<option value="admin">
																		Admin
																	</option>
																	<option value="parent">
																		Parent
																	</option>
																</select>
																<span className="invalid-feedback">
																	Please
																	select your
																	role
																</span>
															</div>
														</div>
													</div>
													<div className="form-check mb-4">
														<input
															type="checkbox"
															className={
																'form-check-input' +
																(errors.isAgreedChecked
																	? ' is-invalid'
																	: values.isAgreedChecked
																	? ' is-valid'
																	: '')
															}
															id="isAgreedChecked"
															name="isAgreedChecked"
															onChange={
																handleChange
															}
														/>
														<label
															className="form-check-label small"
															htmlFor="isAgreedChecked"
														>
															{' '}
															By submitting this
															form I have read and
															acknowledged the{' '}
															<a href="../page-privacy.html">
																Privacy Policy
															</a>
														</label>
														<span className="invalid-feedback">
															Please accept our
															Privacy Policy.
														</span>
													</div>
													<div className="row align-items-center">
														<div className="col-sm-7 mb-3 mb-sm-0">
															<p className="card-text small">
																Already have an
																account?{' '}
																<a
																	className="link"
																	href="../page-login.html"
																>
																	Log In
																</a>
															</p>
														</div>
														<div className="col-sm-5 text-sm-end">
															<button
																disabled={
																	Object.keys(
																		errors
																	).length > 0
																}
																type="submit"
																className="btn btn-primary btn-lg"
															>
																Create Tution
															</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									);
								}}
							</Formik>
						)}
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
export default Account;
