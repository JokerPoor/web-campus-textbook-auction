import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

// 样式重置文件
import 'normalize.css';

// tailwind模块样式文件
import './tailwind.css';

import router from '@/router/index';

// iconfont
import './assets/font/iconfont.js';
import './assets/font/iconfont.css';

/* 
Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法解析自动注册组件，导致 @vant/auto-import-resolver 无法解析样式，因此需要手动引入样式。
*/
// Toast
import 'vant/es/toast/style';

// Dialog
import 'vant/es/dialog/style';

// Notify
import 'vant/es/notify/style';

// ImagePreview
import 'vant/es/image-preview/style';

import { Loading } from 'vant';

import VConsole from 'vconsole';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

if (import.meta.env.VITE_APP_ENV === 'development') new VConsole({ theme: 'dark' });

const app = createApp(App)

app.use(pinia);

app.use(Loading);

app.use(router);

app.mount('#app')
