import axios from 'axios';
import apiSystemRoute from './apiSystemRoute';

export default async function (request_options: any, additional_data: any = {}) {
    // CONTROLADOR
    const system: any = useUserSystemStore();
    const key = request_options.key_string;
    if (request_options?.key && system.requests_save_controller[key] && system.requests_save_controller[key] instanceof AbortController) {
        system.requests_save_controller[key].abort();
    }
    system.requests_save_controller[key] = new AbortController();

    const data_post: any = { ...request_options.data_post, ...additional_data };
    for (const k in data_post) {
        const value = data_post.value ?? data_post[k];
        if (isRef(value) && !!(value as any).effect) {
            return new Promise((resolve) => {});
        }
        data_post[k] = value;
    }

    const route_name = request_options.route_save;

    const system_options: any = apiSystemRoute(route_name, {}, {}, 'POST');

    if (system.trace_logs || request_options.log) {
        console.trace('>> GET URL:', system_options.routeURL);
    }

    try {
        const response = await axios.post(system_options.routeURL, data_post, {
            signal: system.requests_save_controller[key].signal,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': system.token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
        });
        system.requests_save_controller[key] = null;

        return response.data;
    } catch (error: any) {
        console.error('Erro:', error);
    }
}
