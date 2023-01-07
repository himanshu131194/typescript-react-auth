import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	ActionType,
	AuthorizationStatus,
	ReducerType,
} from '../../../contants/const';

export type AuthStatus = {
	authorizationStatus: AuthorizationStatus;
};

const initialState: AuthStatus = {
	authorizationStatus: AuthorizationStatus.Unknown,
};

export const authProcess = createSlice({
	name: ReducerType.Auth,
	initialState,
	reducers: {
		[ActionType.requireAuthorization]: (
			state,
			action: PayloadAction<AuthorizationStatus>
		) => {
			state.authorizationStatus = action.payload;
		},
	},
});

export const { requireAuthorization } = authProcess.actions;
