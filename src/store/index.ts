import { I_User_Info } from '@/apis/userInfo';
import { defineStore } from 'pinia';

const useUserStore = defineStore<
	string,
	{
		user: I_User_Info | null;
	},
	any,
	{
		setUser: (user: I_User_Info) => void;
		logout: () => void;
	}
>('userStore', {
	state: () => ({
		user: JSON.parse(sessionStorage.getItem('user') || '{}'),
	}),
	getters: {},
	actions: {
		setUser(user: I_User_Info) {
			this.user = user;
			sessionStorage.setItem('user', JSON.stringify(user));
		},
		logout() {
			this.user = null;
			sessionStorage.removeItem('user');
		},
	},
	persist: {
		// 修改存储中使用的键名称，默认为当前 Store的 id
		key: 'storeKey',
		// 修改为 sessionStorage，默认为 localStorage
		storage: window.sessionStorage,
	},
});

export default useUserStore;
