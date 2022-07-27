/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as yup from 'yup';
import { Formik } from 'formik';
import { loginWithPhoneOrMobileAction } from '../../../../services/api-actions';
import { LoginTypeRequest } from '../../../../types/auth.types';
import Loading from '../../../../components/loading/loading';
import { useAppDispatch } from '../../../../hooks/use-redux';

function Login() {
	// const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	// const userId = useAppSelector(getUserId);
	// const keyUp: KeyboardEventHandler<HTMLInputElement> = (evt) => {
	// 	const accepted: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	// 	const currentValue = evt.currentTarget.value;
	// 	if (accepted.indexOf(+currentValue) == -1) {
	// 		evt.currentTarget.value = '';
	// 		return;
	// 	}
	// 	if (currentValue.length === 1) {
	// 		if (evt.currentTarget.name === 'code1' && codeTwo)
	// 			codeTwo.current?.focus();
	// 		if (evt.currentTarget.name === 'code2' && codeThree)
	// 			codeThree.current?.focus();
	// 		if (evt.currentTarget.name === 'code3' && codeFour)
	// 			codeFour.current?.focus();
	// 		if (evt.currentTarget.name === 'code4' && codeOne)
	// 			codeOne.current?.focus();
	// 	}
	// };

	// const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
	// 	evt.preventDefault();
	// 	setIsSubmiting(true);
	// 	if (
	// 		codeOne?.current?.value &&
	// 		codeTwo?.current?.value &&
	// 		codeThree?.current?.value &&
	// 		codeFour?.current?.value
	// 	) {
	// 		const otpValue =
	// 			codeOne?.current?.value +
	// 			codeTwo?.current?.value +
	// 			codeThree?.current?.value +
	// 			codeFour?.current?.value;
	// 		dispatch(
	// 			loginAction({
	// 				user: userId,
	// 				otp: otpValue,
	// 			} as OtpLoginTypeRequest)
	// 		);
	// 	}
	// };
	const initialFormValues = {
		phone: '',
	} as LoginTypeRequest;

	const validationSchema = yup.object().shape({
		phone: yup.string().required('First name is required'),
	});

	const submitHandler = (values: LoginTypeRequest) => {
		const otpReq: LoginTypeRequest = {
			phone: values.phone,
		};
		dispatch(loginWithPhoneOrMobileAction(otpReq));
	};
	return (
		<div className="card card-lg">
			<div className="card-body">
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
								<div className="text-center">
									<div className="mb-5">
										<h1 className="display-5">
											Login with phone or Email
										</h1>
										<p>
											Enter the email address you used
											when you joined.
										</p>
									</div>
								</div>
								<div className="mb-4">
									<label
										className="form-label"
										htmlFor="resetPasswordSrEmail"
									>
										Your emal Or phone
									</label>

									<input
										type="text"
										value={values.phone}
										className={`form-control form-control-lg${
											errors.phone
												? ' is-invalid'
												: values.phone.length > 0
												? ' is-valid'
												: ''
										}`}
										name="phone"
										id="phone"
										onChange={handleChange}
										placeholder="+91XXXXXXXXX"
										aria-label="+91XXXXXXXXX"
									/>
									<span className="invalid-feedback">
										Please enter your phone no
									</span>
								</div>
								<div className="d-grid gap-2">
									<button
										disabled={
											Object.keys(errors).length > 0 ||
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
											'Generate OTP'
										)}
									</button>

									<div className="text-center">
										<a
											className="btn btn-link"
											href="./authentication-login-cover.html"
										>
											<i className="bi-chevron-left"></i>{' '}
											Back to Sign in
										</a>
									</div>
								</div>
							</form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
}

export default Login;
