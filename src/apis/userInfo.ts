import request from '@/request/index';
import { E_IS_OR_NO, E_Valid } from '@/types/global';
import { AxiosRequestConfig } from 'axios';

export declare interface I_User_Info {
	userId: number
	username: string
	password: string
	fullName: string
	createdAt: string
	email: string
	isFoul: E_IS_OR_NO
	updatedAt: string
	valid: E_Valid
}

export function postUserInfoLogin(config: AxiosRequestConfig) {
	return request({
		url: '/userInfo/login',
		method: 'post',
		...config,
	});
}

export function postUserInfoRegister(config: AxiosRequestConfig) {
	return request({
		url: '/userInfo/register',
		method: 'post',
		...config,
	});
}
