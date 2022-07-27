/* eslint-disable import/prefer-default-export */
import { combineReducers } from '@reduxjs/toolkit';
import { ReducerType } from '../contants/const';
import { userProcess } from './slices/user/user-process';
import { error } from './slices/error/error';
import { authProcess } from './slices/auth/auth-process';
import { modalProcess } from './slices/modal/modal-process';

export const rootReducer = combineReducers({
	[ReducerType.User]: userProcess.reducer,
	[ReducerType.Auth]: authProcess.reducer,
	[ReducerType.Modal]: modalProcess.reducer,
	[ReducerType.Error]: error.reducer,
});
