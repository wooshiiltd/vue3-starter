import type { RouteRecordRaw } from 'vue-router';
import Index from './Index.vue';

export default [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            needsAuth: false
        }
    }
] as RouteRecordRaw[];
