/* eslint-disable */
import { Formik } from 'formik';
import * as yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import { ITutionUser } from '../../../../types/users.types';

type DefaultProps = {
	show: boolean;
	handleClose: () => void;
};

function Account({ show, handleClose }: DefaultProps) {
	const initialFormValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		role: '',
		isAgreedChecked: false,
	} as ITutionUser;

	const validationSchema = yup.object().shape({
		firstName: yup.string().required('First name is required'),
		lastName: yup.string().required('Last name is required'),
		email: yup
			.string()
			.email('Incorrect email')
			.required('Email is required'),
		phone: yup.string().required('Phone is required'),
		role: yup.string().required(),
		isAgreedChecked: yup.boolean().required(),
	});

	const submitHandler = (values: ITutionUser) => {
		console.log(values);
	};

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
							src="https://htmlstream.com/front/assets/svg/illustrations/oc-looking-for-answers.svg"
							alt="Description"
						/>
					</div>
					<div className="col-md-6">
						<Formik
							initialValues={initialFormValues}
							validationSchema={validationSchema}
							onSubmit={submitHandler}
						>
							{({
								values,
								dirty,
								errors,
								handleChange,
								handleSubmit,
							}) => {
								console.log(errors.hasOwnProperty('firstName'));
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
																		errors.hasOwnProperty(
																			'firstName'
																		) ||
																	' is-invalid'
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
																your first name
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
																className="form-control form-control-lg"
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
																your last name
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
														className="form-control form-control-lg"
														name="email"
														id="email"
														value={values.email}
														onChange={handleChange}
														placeholder="email@site.com"
														aria-label="email@site.com"
													/>
													<span className="invalid-feedback">
														Please enter your email
														address
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
																className="form-control form-control-lg"
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
																Password enter
																your phone no
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
																className="form-select"
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
																	Select Role
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
																Please select
																your role
															</span>
														</div>
													</div>
												</div>
												<div className="form-check mb-4">
													<input
														type="checkbox"
														className="form-check-input"
														id="isAgreedChecked"
														name="isAgreedChecked"
													/>
													<label
														className="form-check-label small"
														htmlFor="isAgreedChecked"
													>
														{' '}
														By submitting this form
														I have read and
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
															disabled={!dirty}
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
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
export default Account;
