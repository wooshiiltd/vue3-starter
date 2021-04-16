import type { RouteLocation, RouteRecordRaw, RouterScrollBehavior } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routeModules = import.meta.globEager('./views/**/routes.ts');
const routes = Object.keys(routeModules)
    .map(modulePath => routeModules[modulePath].default)
    .flat(1) as RouteRecordRaw[];
const routeNames = new Set(routes.map(route => route.name));
const routePaths = new Set(routes.map(route => route.path));

if (routeNames.size !== routes.length) {
    throw new Error('There are missing or duplicate route names detected.');
}

if (routePaths.size !== routes.length) {
    throw new Error('There are duplicate paths defined for the routes.');
}

const scrollBehavior: RouterScrollBehavior = (to, _from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }

    const position: Record<string, number|string> = {
        top: 0,
        behavior: 'smooth'
    };

    if (to.hash) {
        position.selector = to.hash;
    }

    return position;
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior
});

// if (import.meta.hot) {
//     let removeRoutes = [];
//
//     for (const route of routes) {
//         removeRoutes.push(router.addRoute(route));
//     }
//
//     import.meta.hot?.accept('./routes.js', ({ routes }) => {
//         for (const removeRoute of removeRoutes) removeRoute();
//         removeRoutes = [];
//         for (const route of routes) {
//             removeRoutes.push(router.addRoute(route));
//         }
//         router.replace('');
//     });
// }

router.beforeEach(to => {
    // eslint-disable-next-line no-prototype-builtins
    if (to.meta.hasOwnProperty('needsAuth') && !to.meta.needsAuth) {
        return true;
    }

    const authenticated = true;

    if (authenticated) { // todo
        if (to.name === 'login-page-or-whatever') {
            return { name: 'home' } as RouteLocation;
        }

        return true;
    } else {
        if (to.meta.needsAuth) {
            return { name: 'login-page-or-whatever' } as RouteLocation;
        }

        return true;
    }
});

/**
 * The known possible meta values.
 */
declare module 'vue-router' {
    interface RouteMeta {
        needsAuth?: boolean;
        layout?: string;
        [key: string]: unknown;
    }
}

export default router;
