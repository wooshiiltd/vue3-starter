import { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/store',
        name: 'store.index',
        component: import('./Index.vue')
    }
] as RouteRecordRaw[];
