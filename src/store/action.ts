import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AsyncActionType, ReducerType } from '../contants/const';

export const redirectToRoute = createAction<AppRoute>(
	`${ReducerType.Process}${AsyncActionType.RedirectToRoute}`
);
