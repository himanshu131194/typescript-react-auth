/* eslint-disable import/prefer-default-export */
import { combineReducers } from '@reduxjs/toolkit';
import { ReducerType } from '../contants/const';
import { userProcess } from './slices/user-process';

export const rootReducer = combineReducers({
	[ReducerType.User]: userProcess.reducer,
});
