import { AxiosRequestConfig } from 'axios';

export async function apiGetRoute(RouteName: string | null, data: any = null, options: any = null): Promise<any> {
    const system_options: any = apiSystemRoute(RouteName, data, options, 'GET');

    const config: AxiosRequestConfig = {
        responseType: 'json',
    };

    if (options?.file === true) {
        config.responseType = 'blob';
    }

    try {
        axios.defaults.withCredentials = true;
        return axios
            .get(system_options.routeURL, config)
            .then((response) => response.data)
            .catch((error) => console.error('[apiGetRoute.ts] AXIOS GET ERROR: ' + error.name, system_options.routeURL, error));
    } catch (error: any) {
        if (options?.error !== false) {
            console.error('>> Erro ao fazer a requisição:', error?.message);
        }
        return null;
    }
}
