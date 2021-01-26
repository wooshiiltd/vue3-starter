import { Store } from '@/store';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store;
    }
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent;
    export default component;
}
