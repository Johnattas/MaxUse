import { ref, type Ref } from 'vue';
import { apiGetRoute } from '../Routes/apiGetRoute';

export function useRefCached<T>(route_name: string, options: { data_get?: any; key?: string | null; defaultValue?: any } = {}): Ref<T> {
    const state = ref(options.defaultValue ?? null);
    const key = options.key ?? route_name;

    const data = localStorage.getItem(key);

    if (data) state.value = JSON.parse(data);

    const data_get = options.data_get ?? {};
    apiGetRoute(route_name, data_get).then((value) => {
        if (value) {
            state.value = value;
            const cleanData = JSON.parse(JSON.stringify(value));
            localStorage.setItem(key, JSON.stringify(cleanData));
        }
    });

    return state;
}
