import axios from 'axios';
import { apiRoute } from './apiRoute';

export default async function (RouteName: string | null, data: any | null = null, options: any = null) {
    const system_options: any = apiRoute(RouteName, data, options, 'POST');

    if (!system_options) return false;

    try {
        const token: string = system_options.system.token;
        const response = await axios.post(system_options.routeURL, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token,
                'X-Requested-With': 'XMLHttpRequest'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('>> Erro ao fazer a requisição - Rota: ' + RouteName, error);
        return null;
    }
}
