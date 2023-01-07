import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, ReducerType } from '../../../contants/const';
import { IUserResponseOnly } from '../../../types/auth.types';

export type UserStatus = {
	data: IUserResponseOnly | null;
};

const initialState: UserStatus = {
	data: null,
};

export const userProcess = createSlice({
	name: ReducerType.User,
	initialState,
	reducers: {
		[ActionType.setUserInformation]: (
			state,
			action: PayloadAction<IUserResponseOnly>
		) => {
			state.data = action.payload;
		},
	},
});

export const { setUserInformation } = userProcess.actions;
