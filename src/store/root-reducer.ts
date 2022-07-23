/* eslint-disable import/prefer-default-export */
import { combineReducers } from '@reduxjs/toolkit';
import { ReducerType } from '../contants/const';
import { userProcess } from './slices/user-process';
import { error } from './slices/error/error';

export const rootReducer = combineReducers({
	[ReducerType.User]: userProcess.reducer,
	[ReducerType.Error]: error.reducer,
});
