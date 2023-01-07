import { IUser } from './users.types';

export type IRegisterRequest = Omit<
	IUser,
	'id' | 'isEmailVerified' | 'isPhoneVerified' | 'isAgreedChecked'
>;

export type IRegistrationForm = Omit<
	IUser,
	'id' | 'isEmailVerified' | 'isPhoneVerified'
>;

export type IUserResponseOnly = Omit<IUser, 'isAgreedChecked'>;

export interface ITokenPayload {
	token: string;
	expires: string;
}

export interface AccessAndRefreshTokens {
	access: ITokenPayload;
	refresh: ITokenPayload;
}

export interface IRegisterResponse {
	user: Omit<IUser, 'isAgreedChecked'>;
}

export interface IUserWithTokens {
	user: Omit<IUser, 'isAgreedChecked'>;
	tokens: AccessAndRefreshTokens;
}

export interface ILogoutRequest {
	refreshToken: ITokenPayload['token'];
}

export interface IRefreshTokenRequest {
	refreshToken: ITokenPayload['token'];
}

export type IVerifyEmailRequestParams = Pick<ITokenPayload, 'token'>;

export type OtpLoginTypeRequest = {
	user: string;
	otp: string;
};

export type LoginTypeRequest = Omit<
	IUser,
	| 'id'
	| 'isEmailVerified'
	| 'isPhoneVerified'
	| 'isAgreedChecked'
	| 'email'
	| 'firstName'
	| 'lastName'
	| 'role'
>;

// export type IUserWithoutPassword = Omit<IUser, 'password'>;

// export interface ILoginResponse {
// 	user: IUserWithoutPassword;
// 	tokens: AccessAndRefreshTokens;
// }

// export type ILoginRequest = Pick<IUser, 'email' | 'password'>;

// export type AuthState = {
// 	user: IUserWithoutPassword | null;
// 	token: ITokenPayload['token'] | null;
// };

// export interface IUserWithTokens {
// 	user: IUserWithoutPassword;
// 	tokens: AccessAndRefreshTokens;
// }

// export type IForgotPasswordRequest = Pick<IUser, 'email'>;

// export type IResetPasswordRequestBody = Pick<IUser, 'password'>;

// export type IResetPasswordRequestParams = Pick<ITokenPayload, 'token'>;

// export interface IResetPasswordRequest {
// 	body: IResetPasswordRequestBody;
// 	params: IResetPasswordRequestParams;
// }
