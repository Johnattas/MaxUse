import axios from 'axios';
import { apiRoute } from './apiRoute';

export async function apiDeleteRoute(RouteName: string | null, data: any | null = null, options: any = null) {
    const system_options: any = apiRoute(RouteName, data, options, 'DELETE');

    if (!system_options) return false;

    try {
        const token: string = document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
        const response = await axios.delete(system_options.routeURL, {
            data: data,
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
        console.error('>> Erro ao fazer a requisição:', error);
        return null;
    }
}
