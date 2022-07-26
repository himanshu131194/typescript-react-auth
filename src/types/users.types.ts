import IDoc from '../definitions/IDoc';
import IQueryFilter from '../definitions/IDoc';

// export interface IUser extends IDoc {
// 	id: string;
// 	name: string;
// 	role: string;
// 	email: string;
// 	password: string;
// 	isEmailVerified: boolean;
// }

export interface IUser extends IDoc {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	role: string;
	isEmailVerified: false;
	isPhoneVerified: false;
	isAgreedChecked: boolean;
}

// export type IUserWithoutPassword = Omit<IUser, 'password'>;

export type ICreateUserRequest = Omit<
	IUser,
	'id' | 'isEmailVerified' | 'isPhoneVerified' | 'isAgreedChecked'
>;

export type IUserRegistrationForm = Omit<
	IUser,
	'id' | 'isEmailVerified' | 'isPhoneVerified'
>;

export type IUserResponse = {
	user: Omit<IUser, 'isAgreedChecked'>;
};

// export type IUserFilterFields = Pick<IUser, 'name' | 'role'>;

// export type IGetUsersRequestParams = Partial<IUserFilterFields & IQueryFilter>;

export type IGetSingleUserRequest = Pick<IUser, 'id'>;

export type UserUpdateFields = Omit<IUser, 'id' | 'role' | 'isEmailVerified'>;

export interface IUpdateUserRequest {
	id: IUser['id'];
	body: Partial<UserUpdateFields>;
}

export type IDeleteUserRequest = Pick<IUser, 'id'>;

// type Roles = 'teacher' | 'student' | 'admin' | 'parent';

export interface ITutionUser {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	role: string;
	isEmailVerified: false;
	isPhoneVerified: false;
	isAgreedChecked: boolean;
}

export type ITutionUserRequest = Omit<
	ITutionUser,
	'id' | 'isEmailVerified' | 'isPhoneVerified' | 'isAgreedChecked'
>;

// export type ITutionUserForm = Omit<
// 	ITutionUser,
// 	'id' | 'isEmailVerified' | 'isPhoneVerified'
// >;

export type ITutionUserResponse = {
	user: Omit<ITutionUser, 'isAgreedChecked'>;
};

export type ITutionUserResponseOnly = Omit<ITutionUser, 'isAgreedChecked'>;
