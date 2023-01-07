import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, ModalStatus, ReducerType } from '../../../contants/const';

export type ModalStatusType = {
	modalStatus: ModalStatus;
};

const initialState: ModalStatusType = {
	modalStatus: ModalStatus.Unknown,
};

export const modalProcess = createSlice({
	name: ReducerType.Modal,
	initialState,
	reducers: {
		[ActionType.updateModal]: (
			state,
			action: PayloadAction<ModalStatus>
		) => {
			state.modalStatus = action.payload;
		},
	},
});

export const { updateModal } = modalProcess.actions;
