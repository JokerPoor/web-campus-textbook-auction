import axios from 'axios';
import { interceptorsReq, interceptorsRes } from './interceptors';

const request = axios.create({
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 请求数据拦截处理
request.interceptors.request.use(interceptorsReq, (error) => Promise.reject(error.response));

// 返回数据拦截处理
request.interceptors.response.use(interceptorsRes, (error) => Promise.reject(error.response));

export default request;
