import { AppStore } from '../store';
import { AuthorizationStatus, ReducerType } from '../../contants/const';

export const getAuthorizationStatus = (state: AppStore): AuthorizationStatus =>
	state[ReducerType.User].authorizationStatus;
