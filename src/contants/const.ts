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
	Login = '/login',
	Logout = '/logout',
}
