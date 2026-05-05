import { useRoute } from 'ziggy-js';

export function apiRoute(RouteName: string | null, data: any | null = null, options: any = null, method = 'GET') {
    if (!RouteName) return null;

    const option_load_screen = options?.load_screen ?? null;

    const route = useRoute();
    const routeURL: string = method === 'GET' ? route(RouteName, data) : route(RouteName);

    const apiHelper = {
        option_load_screen,
        routeURL
    };

    return apiHelper;
}
