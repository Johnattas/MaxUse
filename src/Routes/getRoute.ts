import { useRoute } from 'ziggy-js';
import { type MaybeRefOrGetter, toValue } from 'vue';
import { isBlank } from '@/Helpers/Types';

export const getRoute = (routeName: MaybeRefOrGetter<string | null> = null, data: any = {}): string | null => {
    const route_value = toValue(routeName);
    if (!route_value || isBlank(route_value)) return null;

    const data_value = toValue(data) ?? {};

    const route = useRoute();
    if (route().has(route_value)) return route(route_value, data_value);
    return null;
};

export const getRouteByName = getRoute;