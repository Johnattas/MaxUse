import axios from 'axios';

export default async function (request_options: any): Promise<Response> {
    if (!request_options.get) return apiGetNullResponse(false, request_options.start_value);

    // CONTROLADOR
    const system: any = useUserSystemStore();
    const key = request_options.key_string;
    if (request_options?.key && system.requests_get_controller[key] && system.requests_get_controller[key] instanceof AbortController) {
        system.requests_get_controller[key].abort();
        system.requests_get_controller[key] = null;
        return new Promise((resolve) => {});
    }

    system.requests_get_controller[key] = new AbortController();

    const data_get: any = {};
    for (const k in request_options.data_get) {
        const value = request_options.data_get[k]?.value ?? request_options.data_get[k];
        if (isRef(value) && !!(value as any).effect) {
            return new Promise((resolve) => {});
        }
        data_get[k] = value;
    }

    const routeGetURL = route(request_options.get, data_get);

    for (const k in data_get) {
        if (k === 'id' && !request_options.data_get[k]) {
            return apiGetNullResponse(false, request_options.start_value);
        }
    }

    if (system.trace_logs || request_options.log) {
        console.trace('>> GET URL:', routeGetURL);
    }

    return axios.get(routeGetURL, { signal: system.requests_get_controller[key].signal });
}
