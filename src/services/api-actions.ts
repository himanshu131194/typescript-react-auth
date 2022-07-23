/* eslint-disable import/no-cycle */
/* eslint-disable */

import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	ReducerType,
	AsyncActionType,
	AuthorizationStatus,
	APIRoute,
	TIMEOUT_SHOW_ERROR,
	AppRoute,
} from '../contants/const';
import { AppDispatch, AppStore, store } from '../store/store';
import { requireAuthorization } from '../store/slices/user-process';
import { AuthData } from '../types/auth-data';
import {
	IUserWithTokens,
	// IRefreshTokenRequest,
	// ILogoutRequest,
} from '../types/auth.types';
import { ITutionUserRequest, ITutionUserResponse } from '../types/users.types';
import { saveToken, getToken, dropToken } from './token';
import { setError } from '../store/slices/error/error';
import { errorHandle } from './error-handle';
import { redirectToRoute } from '../store/action';

export const clearErrorAction = createAsyncThunk(
	`${ReducerType.Error}${AsyncActionType.ClearError}`,
	() => {
		setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
	}
);

export const checkAuthAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.User}${AsyncActionType.CheckAuth}`,
	async (_arg, { dispatch, extra: api }) => {
		const refreshToken = getToken();
		try {
			const {
				data: { tokens },
			} = await api.post<IUserWithTokens>(APIRoute.RefreshToken, {
				refreshToken,
			});
			saveToken(tokens);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
		} catch (error) {
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const signinAction = createAsyncThunk<
	void,
	ITutionUserRequest,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.User}${AsyncActionType.Signin}`,
	async (
		{ firstName, lastName, email, phone, role },
		{ dispatch, extra: api }
	) => {
		try {
			await api.post<ITutionUserResponse>(APIRoute.Signin, {
				firstName,
				lastName,
				email,
				phone,
				role,
			});
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
			dispatch(redirectToRoute(AppRoute.Login));
		} catch (error) {
			console.log(error);
			errorHandle(error);
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const loginAction = createAsyncThunk<
	void,
	AuthData,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.User}${AsyncActionType.Login}`,
	async ({ login: email, password }, { dispatch, extra: api }) => {
		try {
			const {
				data: { tokens },
			} = await api.post<IUserWithTokens>(APIRoute.Login, {
				email,
				password,
			});
			saveToken(tokens);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
			dispatch(redirectToRoute(AppRoute.Home));
		} catch (error) {
			errorHandle(error);
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const logoutAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.User}${AsyncActionType.Logout}`,
	async (_arg, { dispatch, extra: api }) => {
		try {
			const refreshToken = getToken();
			await api.post<void>(APIRoute.Logout, {
				refreshToken,
			});
			dropToken();
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		} catch (error) {
			errorHandle(error);
		}
	}
);
