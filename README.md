# Vue Starter

The stack:
 - vue
 - typescript
 - vite
 - scss + tailwind (jit)
 - jest + vtu + snapshot testing + webdriverIO /w selinium
 - eslint
 - i18n
 - router

requirements:
 - java
 - node

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

## Routes
The `views` folder expected to somewhat represent the url structure of the application routes. All routes must have a unique path and name.

In this `views` folder all `routes.ts` files will be found at any depth which is expected to have a default export of `RouteRecordRaw[]`

For example:
```ts
import { RouteRecordRaw } from 'vue-router';
import type { Meta } from '@/router';

export default [
    {
        path: '/',
        name: 'index',
        component: async() => import(/* webpackChunkName: "index" */ './Index.vue'),
        meta: { // optional
            needsAuth: false
        } as Meta
    }
] as RouteRecordRaw[];
```

## Locales
To add a new locale, all you have to do is create a file in the `locales` folder which by default exports a `LocaleExport`. The file must be named the same as the [language iso code](https://www.w3schools.com/tags/ref_language_codes.asp). It should contain all the messages as the `fallbackLocale` setting in i18n. Alternatively you may use the [i18n custom blocks](https://github.com/intlify/vue-i18n-loader#rocket-i18n-custom-block).

## Available aliases

Aliases that resolved by the testing suites, typescript and bundler
 - `@` - points to the `src` directory e.g.: `import $store from '@/store`

## Store
Store is a simple [reactive store pattern](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch).
To create a store module, place a ts module at any depth in the `./stores` folder with the default export implementing the `Store` type found in the `store.ts`
The store is available everywhere in on vue under the `$store` property
