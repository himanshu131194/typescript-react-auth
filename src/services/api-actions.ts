/* eslint-disable import/no-cycle */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	ReducerType,
	AsyncActionType,
	AuthorizationStatus,
	APIRoute,
} from '../contants/const';
import { AppDispatch, AppStore } from '../store/store';
import { requireAuthorization } from '../store/slices/user-process';

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
		try {
			await api.get(APIRoute.Login);
			dispatch(requireAuthorization(AuthorizationStatus.Auth));
		} catch (error) {
			dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
		}
	}
);
