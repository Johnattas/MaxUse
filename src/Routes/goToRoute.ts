import { useRoute as ziggyRoute } from 'ziggy-js';
import { type MaybeRefOrGetter, toValue } from 'vue';
import { isBlank } from '../Helpers/Types';
import type { Router } from 'vue-router';

let activeRouter: Router | null = null;

export const setLibraryRouter = (router: Router): void => {
    activeRouter = router;
};

export const goToRoute = (route: MaybeRefOrGetter<string | null> = null, data: any = {}): boolean => {
    if (!activeRouter) throw new Error('Router não configurado na biblioteca.');

    const route_value = toValue(route);
    if (!route_value || isBlank(route_value)) return false;

    const data_value = toValue(data) ?? {};

    const ziggy_route = ziggyRoute();
    if (ziggy_route().has(route_value)) {
        activeRouter.push(ziggy_route(route_value, data_value));
        return true;
    };

    console.log('router', activeRouter);
    activeRouter.push({ name: route_value, params: data_value, query: data_value });

    return true;
};

export const goToRouteByName = goToRoute;