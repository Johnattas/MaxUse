import axios from 'axios';
import apiSystemRoute from './apiSystemRoute';

export async function apiDeleteRoute(RouteName: string | null, data: any | null = null, options: any = null) {
    const system_options: any = apiSystemRoute(RouteName, data, options, 'DELETE');

    if (!system_options) {
        return false;
    }

    try {
        const token: string = system_options.system.token;
        const response = await axios.delete(system_options.routeURL, {
            data: data,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('>> Erro ao fazer a requisição:', error);
        return null;
    }
}
