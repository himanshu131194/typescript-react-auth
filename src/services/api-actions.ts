/* eslint-disable import/no-cycle */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	ReducerType,
	AsyncActionType,
	AuthorizationStatus,
	ModalStatus,
	APIRoute,
	TIMEOUT_SHOW_ERROR,
	AppRoute,
} from '../contants/const';
import { AppDispatch, AppStore, store } from '../store/store';
import { requireAuthorization } from '../store/slices/auth/auth-process';
import { setUserInformation } from '../store/slices/user/user-process';
import {
	IRegisterRequest,
	IRegisterResponse,
	IUserWithTokens,
	LoginTypeRequest,
	OtpLoginTypeRequest,
} from '../types/auth.types';
// import { saveToken, getToken, dropToken } from './token';
import { setError } from '../store/slices/error/error';
import { errorHandle } from './error-handle';
import { redirectToRoute } from '../store/action';
import { getToken, saveToken } from './token';
import { IUserResponse } from '../types/users.types';
import { updateModal } from '../store/slices/modal/modal-process';
// import { redirectToRoute } from '../store/action';

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
	`${ReducerType.Auth}${AsyncActionType.CheckAuth}`,
	async (_arg, { dispatch, extra: api }) => {
		const refreshToken = getToken();
		try {
			const {
				data: { tokens, user },
			} = await api.post<IUserWithTokens>(APIRoute.RefreshToken, {
				refreshToken,
			});
			saveToken(tokens);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
			dispatch(setUserInformation(user));
		} catch (error) {
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const signinAction = createAsyncThunk<
	void,
	IRegisterRequest,
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
			const {
				data: { user },
			} = await api.post<IRegisterResponse>(APIRoute.Signin, {
				firstName,
				lastName,
				email,
				phone,
				role,
			});
			dispatch(setUserInformation(user));
			dispatch(updateModal(ModalStatus.Otp));
		} catch (error) {
			errorHandle(error);
			dispatch(updateModal(ModalStatus.SignUp));
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const loginAction = createAsyncThunk<
	void,
	OtpLoginTypeRequest,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.Auth}${AsyncActionType.Login}`,
	async ({ user, otp }, { dispatch, extra: api }) => {
		try {
			const {
				data: { user: userData, tokens },
			} = await api.post<IUserWithTokens>(APIRoute.Login, {
				user,
				otp,
			});
			saveToken(tokens);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
			dispatch(setUserInformation(userData));
			dispatch(redirectToRoute(AppRoute.Home));
		} catch (error) {
			errorHandle(error);
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);

export const loginWithPhoneOrMobileAction = createAsyncThunk<
	void,
	LoginTypeRequest,
	{
		dispatch: AppDispatch;
		state: AppStore;
		extra: AxiosInstance;
	}
>(
	`${ReducerType.Auth}${AsyncActionType.GenerateOtp}`,
	async ({ phone }, { dispatch, extra: api }) => {
		try {
			const {
				data: { user },
			} = await api.post<IUserResponse>(APIRoute.GenerateOtp, {
				phone,
			} as LoginTypeRequest);
			dispatch(setUserInformation(user));
			dispatch(updateModal(ModalStatus.Otp));
		} catch (error) {
			errorHandle(error);
			dispatch(updateModal(ModalStatus.LogIn));
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);
// export const logoutAction = createAsyncThunk<
// 	void,
// 	undefined,
// 	{
// 		dispatch: AppDispatch;
// 		state: AppStore;
// 		extra: AxiosInstance;
// 	}
// >(
// 	`${ReducerType.User}${AsyncActionType.Logout}`,
// 	async (_arg, { dispatch, extra: api }) => {
// 		try {
// 			const refreshToken = getToken();
// 			await api.post<void>(APIRoute.Logout, {
// 				refreshToken,
// 			});
// 			dropToken();
// 			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
// 		} catch (error) {
// 			errorHandle(error);
// 		}
// 	}
// );
