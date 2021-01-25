import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/main.scss';
import router from './router';
import i18n from './i18n';
import $store from './store';

const app = createApp(App)
    .use(router)
    .use(i18n);

app.config.globalProperties.$store = $store;
app.mount('#app');
