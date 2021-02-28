import { RouteRecordRaw } from 'vue-router';
import Index from './Index.vue';
import { Meta } from '@/router';

export default [
    {
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            needsAuth: false
        } as Meta
    }
] as RouteRecordRaw[];
