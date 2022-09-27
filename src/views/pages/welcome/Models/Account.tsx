/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
	useState,
	FormEvent,
	KeyboardEventHandler,
	MutableRefObject,
	useRef,
} from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../../../hooks/use-redux';
import { loginAction, signinAction } from '../../../../services/api-actions';
import {
	IRegistrationForm,
	IRegisterRequest,
	OtpLoginTypeRequest,
} from '../../../../types/auth.types';

import { ASSETS_BASE_URL, ModalStatus } from '../../../../contants/const';
import { getModalStatus, getUserId } from '../../../../store/slices/selectors';
import Loading from '../../../../components/loading/loading';
import Login from './Login';
import { store } from '../../../../store/store';
import { updateModal } from '../../../../store/slices/modal/modal-process';

type DefaultProps = {
	show: boolean;
	handleClose: () => void;
};

type OtpProps = {
	codeOne: MutableRefObject<HTMLInputElement | null> | null;
	codeTwo: MutableRefObject<HTMLInputElement | null> | null;
	codeThree: MutableRefObject<HTMLInputElement | null> | null;
	codeFour: MutableRefObject<HTMLInputElement | null> | null;
};

type CoverImages = 'create' | 'otp';
const CoverImagesUrls: Record<CoverImages, string> = {
	create: 'assets/svg/illustrations/oc-looking-for-answers.svg',
	otp: 'assets/svg/illustrations/oc-unlock.svg',
};

function OtpModel({ codeOne, codeTwo, codeThree, codeFour }: OtpProps) {
	const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const userId = useAppSelector(getUserId);
	const keyUp: KeyboardEventHandler<HTMLInputElement> = (evt) => {
		const accepted: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		const currentValue = evt.currentTarget.value;
		if (accepted.indexOf(+currentValue) === -1) {
			evt.currentTarget.value = ''; // eslint-disable-line
			return;
		}
		if (currentValue.length === 1) {
			if (evt.currentTarget.name === 'code1' && codeTwo)
				codeTwo.current?.focus();
			if (evt.currentTarget.name === 'code2' && codeThree)
				codeThree.current?.focus();
			if (evt.currentTarget.name === 'code3' && codeFour)
				codeFour.current?.focus();
			if (evt.currentTarget.name === 'code4' && codeOne)
				codeOne.current?.focus();
		}
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setIsSubmiting(true);
		if (
			codeOne?.current?.value &&
			codeTwo?.current?.value &&
			codeThree?.current?.value &&
			codeFour?.current?.value
		) {
			const otpValue =
				codeOne?.current?.value + // eslint-disable-line
				codeTwo?.current?.value + // eslint-disable-line
				codeThree?.current?.value + // eslint-disable-line
				codeFour?.current?.value; // eslint-disable-line
			dispatch(
				loginAction({
					user: userId,
					otp: otpValue,
				} as OtpLoginTypeRequest)
			);
		}
	};
	return (
		<div className="card card-lg">
			<div className="card-body text-center">
				<div className="mb-5">
					<h1 className="display-5">2-step Verification</h1>
					<p className="mb-0">
						We sent a verification code to your email.
					</p>
					<p>Enter the code from the email in the field below.</p>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="row gx-2 gx-sm-3">
						<div className="col">
							<div className="mb-4">
								<input
									ref={codeOne}
									type="number"
									className="form-control form-control-single-number"
									name="code1"
									id="twoStepVerificationSrCodeInput1"
									placeholder=""
									aria-label=""
									maxLength={1}
									autoComplete="off"
									autoCapitalize="off"
									spellCheck="false"
									onKeyUp={keyUp}
								/>
							</div>
						</div>
						<div className="col">
							<div className="mb-4">
								<input
									ref={codeTwo}
									type="number"
									className="form-control form-control-single-number"
									name="code2"
									id="twoStepVerificationSrCodeInput2"
									placeholder=""
									aria-label=""
									maxLength={1}
									autoComplete="off"
									autoCapitalize="off"
									spellCheck="false"
									onKeyUp={keyUp}
								/>
							</div>
						</div>
						<div className="col">
							<div className="mb-4">
								<input
									ref={codeThree}
									type="number"
									className="form-control form-control-single-number"
									name="code3"
									id="twoStepVerificationSrCodeInput3"
									placeholder=""
									aria-label=""
									maxLength={1}
									autoComplete="off"
									autoCapitalize="off"
									spellCheck="false"
									onKeyUp={keyUp}
								/>
							</div>
						</div>
						<div className="col">
							<div className="mb-4">
								<input
									ref={codeFour}
									type="number"
									className="form-control form-control-single-number"
									name="code4"
									id="twoStepVerificationSrCodeInput4"
									placeholder=""
									aria-label=""
									maxLength={1}
									autoComplete="off"
									autoCapitalize="off"
									spellCheck="false"
									onKeyUp={keyUp}
								/>
							</div>
						</div>
					</div>
					<div className="d-grid mb-3">
						<button
							disabled={isSubmiting}
							type="submit"
							className="btn btn-primary btn-lg"
						>
							{isSubmiting ? (
								<>
									Loading...
									{` `}
									<span>
										<Loading width="1rem" height="1rem" />
									</span>
								</>
							) : (
								'Verify my account'
							)}
						</button>
					</div>
				</form>
				<div className="text-center">
					<p>
						Haven't received it? <a href="/">Resend a new code.</a>
					</p>
				</div>
			</div>
		</div>
	);
}

function Account({ show, handleClose }: DefaultProps) {
	const code1 = useRef<HTMLInputElement | null>(null);
	const code2 = useRef<HTMLInputElement | null>(null);
	const code3 = useRef<HTMLInputElement | null>(null);
	const code4 = useRef<HTMLInputElement | null>(null);
	const dispatch = useAppDispatch();
	const modalStatus = useAppSelector(getModalStatus);
	const initialFormValues = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		role: '',
		isAgreedChecked: false,
	} as IRegistrationForm;

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
				/* eslint-disable-next-line */
				/(^(\+91[\-\s]?)?(\91[\-\s]?)?[0]?(91)?[123456789]\d{9}$)/,
				'Phone number is not valid'
			)
			.required('Phone is required')
			.min(10)
			.max(10),

		role: yup.string().required(),
		isAgreedChecked: yup.boolean().oneOf([true]).required(),
	});

	const submitHandler = (values: IRegistrationForm) => {
		const tutionData: IRegisterRequest = {
			firstName: values.firstName,
			lastName: values.lastName,
			email: values.email,
			phone: values.phone,
			role: values.role,
		};
		dispatch(signinAction(tutionData));
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
							src={ASSETS_BASE_URL + CoverImagesUrls.create}
							alt="Description"
						/>
					</div>
					<div className="col-md-6">
						{modalStatus === ModalStatus.Otp && (
							<OtpModel
								codeOne={code1}
								codeTwo={code2}
								codeThree={code3}
								codeFour={code4}
							/>
						)}
						{modalStatus === ModalStatus.LogIn && <Login />}

						{modalStatus === ModalStatus.SignUp && (
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
									isSubmitting,
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
																	className={`form-control form-control-lg${
																		values
																			.firstName
																			.length >
																		0
																			? ' is-valid'
																			: errors.firstName
																			? ' is-invalid'
																			: ''
																	}`}
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
																	className={`form-control form-control-lg${
																		values
																			.lastName
																			.length >
																		0
																			? ' is-valid'
																			: errors.lastName
																			? ' is-invalid'
																			: ''
																	}`}
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
															className={`form-control form-control-lg${
																errors.email
																	? ' is-invalid'
																	: values.email
																	? ' is-valid'
																	: ''
															}`}
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
																	className={`form-control form-control-lg${
																		errors.phone
																			? ' is-invalid'
																			: values
																					.phone
																					.length >
																			  0
																			? ' is-valid'
																			: ''
																	}`}
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
																	className={`form-select${
																		values
																			.role
																			.length >
																		0
																			? ' is-valid'
																			: errors.role
																			? ' is-invalid'
																			: ''
																	}`}
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
															className={`form-check-input${
																errors.isAgreedChecked
																	? ' is-invalid'
																	: values.isAgreedChecked
																	? ' is-valid'
																	: ''
															}`}
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
																	onClick={(
																		e
																	) => {
																		e.preventDefault();
																		store.dispatch(
																			updateModal(
																				ModalStatus.LogIn
																			)
																		);
																	}}
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
																	).length >
																		0 ||
																	isSubmitting
																}
																type="submit"
																className="btn btn-primary btn-lg"
															>
																{isSubmitting ? (
																	<>
																		Loading...
																		{` `}
																		<span>
																			<Loading
																				width="1rem"
																				height="1rem"
																			/>
																		</span>
																	</>
																) : (
																	'Create tution'
																)}
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
