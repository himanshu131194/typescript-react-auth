import { AppStore } from '../store';
import { AuthorizationStatus, ReducerType } from '../../contants/const';

export const getAuthorizationStatus = (state: AppStore): AuthorizationStatus =>
	state[ReducerType.Auth].authorizationStatus;

export const getUserId = (state: AppStore): string | undefined =>
	state[ReducerType.User].data?.id;

export const getErrorStatus = (state: AppStore): string =>
	state[ReducerType.Error].error;

export const getModalStatus = (state: AppStore): string =>
	state[ReducerType.Modal].modalStatus;
