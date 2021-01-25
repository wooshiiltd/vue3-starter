import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';
import router from './router';
import i18n from './i18n';
import store from './store';

createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app');
