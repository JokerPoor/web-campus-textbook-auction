import { AxiosHeaders, AxiosInterceptorManager } from 'axios';
import request from './index';
import axios from 'axios';
import { showFailToast } from 'vant';

type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => any ? P : never;

let isConfigLoaded = false;

export const interceptorsReq: FirstParameter<AxiosInterceptorManager<any>['use']> = async (config) => {
	if (!isConfigLoaded) {
		console.log(import.meta.env.VITE_APP_ENV,'import.meta.env.VITE_APP_ENV');
		if (import.meta.env.VITE_APP_ENV === 'development') {
			request.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
			config.baseURL = import.meta.env.VITE_APP_BASE_URL;
		} else {
			try {
				const response = await axios({
					method: 'get',
					url: String(import.meta.env.VITE_APP_NGROK_CONFIG_URL),
					headers: new AxiosHeaders({
						'ngrok-skip-browser-warning': '69420',
					}),
				});
				const configData = response.data;
				request.defaults.baseURL = configData.campusTextbookAuction.requestUrl;
				config.baseURL = configData.campusTextbookAuction.requestUrl;
				isConfigLoaded = true;
			} catch (error) {
				showFailToast('配置文件加载失败:' + error);
			}
		}
	}
	return config;
};

export const interceptorsRes: FirstParameter<AxiosInterceptorManager<any>['use']> = (response) => {
	if (response.status === 200) {
		return new Promise((resolve) => {
			resolve(response.data);
		});
	} else {
		return new Promise((_resolve, reject) => {
			showFailToast(response.data.message || '请求错误');
			reject(response);
		});
	}
};
