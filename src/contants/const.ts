export const TIMEOUT_SHOW_ERROR = 2000;

export enum HttpCode {
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	NOT_FOUND = 404,
}

export enum AppRoute {
	Login = '/login',
	Signup = '/signup',
	Home = '/',
	NotFound = '*',
}

export enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

export enum ReducerType {
	Process = 'Process',
	Data = 'data',
	User = 'user',
	Error = 'error',
}

export enum ActionType {
	incrementStep = 'incrementStep',
	checkUserAnswer = 'checkUserAnswer',
	resetGame = 'reset',
	loadQuestions = 'loadQuestions',
	requireAuthorization = 'requireAuthorization',
	setError = 'setError',
}

export enum AsyncActionType {
	FetchQuestions = '/fetchQuestions',
	CheckAuth = '/checkAuth',
	Signin = '/asSignin',
	Login = '/asLogin',
	Logout = '/asLogout',
	ClearError = '/clearError',
	RedirectToRoute = '/redirectToRoute',
}

export enum AuthTokens {
	AccessToken = 'accessToken',
	RefreshToken = 'refreshToken',
}

export enum APIRoute {
	Signin = '/auth/register',
	Login = '/auth/login',
	Logout = '/auth/logout',
	RefreshToken = '/auth/refresh-tokens',
}
