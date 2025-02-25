import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import { afterNav, beforeNav } from './navigate';

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/login-register',
	},
	{
		path: '/login-register',
		name: 'LoginRegister',
		component: () => import('@/pages/login-register/index.vue'),
		meta: {
			keepAlive: false,
			title: 'login-register',
			transition: 'van-fade',
		},
	},
	{
		path: '/toolbar-menu',
		name: 'ToolbarMenu',
		component: () => import('@/pages/toolbar-menu/index.vue'),
		meta: {
			keepAlive: false,
			title: 'toolbar-menu',
			transition: 'van-fade',
		},
		redirect: '/toolbar-menu/home',
		children: [
			{
				path: 'personal-center',
				name: 'PersonalCenter',
				component: () => import('@/pages/toolbar-menu/route-page/personal-center/index.vue'),
				meta: {
					keepAlive: false,
					title: 'personal-center',
					transition: 'van-fade',
				}
			},
			{
				path: 'home',
				name: 'Home',
				component: () => import('@/pages/toolbar-menu/route-page/home/index.vue'),
				meta: {
					keepAlive: false,
					title: 'home',
					transition: 'van-fade',
				}
			},
			{
				path: 'collection',
				name: 'Collection',
				component: () => import('@/pages/toolbar-menu/route-page/collection/index.vue'),
				meta: {
					keepAlive: false,
					title: 'collection',
					transition: 'van-fade',
				}
			},
			{
				path: 'chat',
				name: 'Chat',
				component: () => import('@/pages/toolbar-menu/route-page/chat/index.vue'),
				meta: {
					keepAlive: false,
					title: 'chat',
					transition: 'van-fade',
				}
			}
		]
	},
	{
		path: '/auction-detail',
		name: 'AuctionDetail',
		component: () => import('@/pages/auction-detail/index.vue'),
		meta: {
			keepAlive: false,
			title: 'auction-detail',
			transition: 'van-fade',
		},
	},
	{
		path: '/auction-manage',
		name: 'AuctionManage',
		component: () => import('@/pages/auction-manage/index.vue'),
		meta: {
			keepAlive: false,
			title: 'auction-manage',
			transition: 'van-fade',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];

export const getKeepAliveRoutes = (routes: RouteRecordRaw[]) => {
	let keepAliveRoutes: string[] = [];

	for (const route of routes) {
		if (route.meta && route.meta.keepAlive && route.name) {
			keepAliveRoutes.push(String(route.name));
		}

		if (route.children) {
			const childRoutes = getKeepAliveRoutes(route.children);
			keepAliveRoutes = keepAliveRoutes.concat(childRoutes);
		}
	}

	return keepAliveRoutes;
};

export const keepAliveRoutes = getKeepAliveRoutes(routes);

export const router = createRouter({
	history: createWebHashHistory('/'),
	routes,
});

router.beforeEach(beforeNav);
router.afterEach(afterNav);

export default router;
