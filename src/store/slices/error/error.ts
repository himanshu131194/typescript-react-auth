import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, ReducerType } from '../../../contants/const';

type ErrorProcess = {
	error: string;
};

const initialState: ErrorProcess = {
	error: '',
};

export const error = createSlice({
	name: ReducerType.Error,
	initialState,
	reducers: {
		[ActionType.setError]: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	},
});

export const { setError } = error.actions;
