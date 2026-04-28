import { useRoute } from 'ziggy-js';

export default function (RouteName: string, data: any | null = null) {
    const route = useRoute();
    return data ? route(RouteName, data) : route(RouteName);
}
