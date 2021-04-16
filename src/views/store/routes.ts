import type { RouteRecordRaw } from 'vue-router';

export default [
    {
        path: '/store',
        name: 'store.index',
        component: async () => import('./Index.vue')
    }
] as RouteRecordRaw[];
