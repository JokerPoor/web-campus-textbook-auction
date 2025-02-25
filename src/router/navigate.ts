import { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router';

export const beforeNav: NavigationGuardWithThis<undefined> = (_to, _from, next) => {
	/* 
		预留页面权限
	*/
	next();
};

export const afterNav: NavigationHookAfter = (to) => {
	if ('title' in to.meta) {
		document.title = to.meta.title + '';
	} else {
		document.title = '校园二手教材拍卖';
	}
};
