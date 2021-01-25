import type { App } from '@vue/runtime-core';
const storeModules = import.meta.globEager('./stores/**/*.ts');

export type Store = {
    getters: Record<string, CallableFunction>;
    setters: Record<string, CallableFunction>;
};

const stores = Object.keys(storeModules)
    .map(modulePath => storeModules[modulePath].default)
    .flat(1)
    .filter((store: Store) => !!store?.getters && !!store?.setters);

const mergedStores = stores.reduce(
    (previous, next) =>  ({ ...previous, ...next }),
    { getters: {}, setters: {} }
);

export default {
    install: (app: App): void => {
        app.config.globalProperties.$store = mergedStores;
    }
};
