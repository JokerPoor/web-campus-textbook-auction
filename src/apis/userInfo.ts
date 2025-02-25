import request from '@/request/index';
import { AxiosRequestConfig } from 'axios';

export declare interface I_User_Info {
	userId: number
	username: string
	password: string
	fullName: string
	createdAt: string
	email: string
	isFoul: 0 | 1
	updatedAt: string
	valid: 0 | 1
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
