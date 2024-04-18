import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import App from './App.vue';
import '@/assets/iconfont/iconfont.css';
import './style.scss';

// 创建vue实例
const app = createApp(App);

// 挂在路由
app.use(router);

// 挂在 pinia
app.use(createPinia());

// 挂载实例
app.mount('#app');
