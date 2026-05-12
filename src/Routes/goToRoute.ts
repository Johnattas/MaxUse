import { useRoute as ziggyRoute } from 'ziggy-js';
import { useRouter } from 'vue-router';
import { type MaybeRefOrGetter, toValue } from 'vue';
import { isBlank } from '../Helpers/Types';

export const goToRoute = (route: MaybeRefOrGetter<string | null> = null, data: any = {}): boolean => {
    const route_value = toValue(route);
    if (!route_value || isBlank(route_value)) return false;

    const data_value = toValue(data) ?? {};

    const router = useRouter();
    const ziggy_route = ziggyRoute();
    if (ziggy_route().has(route_value)) {
        router.push(ziggy_route(route_value, data_value));
        return true;
    };

    router.push({ name: route_value, params: data_value, query: data_value });

    return true;
};

export const goToRouteByName = goToRoute;