import { AccessAndRefreshTokens } from '../types/auth.types';

const AUTH_TOKEN_KEY_NAME = 'refreshToken';

export type Token = string;

export const getToken = (): Token => {
	const token =
		localStorage.getItem(AUTH_TOKEN_KEY_NAME) ||
		sessionStorage.getItem(AUTH_TOKEN_KEY_NAME);
	return token ?? '';
};

export const saveToken = (tokens: AccessAndRefreshTokens): void => {
	const rememberMe = localStorage.getItem('rememberMe');
	if (rememberMe === 'true') {
		localStorage.setItem('accessToken', tokens.access.token);
		localStorage.setItem('refreshToken', tokens.refresh.token);
	} else {
		sessionStorage.setItem('accessToken', tokens.access.token);
		sessionStorage.setItem('refreshToken', tokens.refresh.token);
	}
};

export const dropToken = (): void => {
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	sessionStorage.removeItem('accessToken');
	sessionStorage.removeItem('refreshToken');
};
