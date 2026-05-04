import localforage from 'localforage';
import { hasContent } from '../Helpers/Types';
import { apiGetRoute } from '../Routes/apiGetRoute';

export const useInCache = async (route_name: string, data_get: any, key: string) => {
    localforage.config({ name: 'caches', storeName: 'cache-api' });

    const data: any = await localforage.getItem(key);
    if (hasContent(data)) return data;

    const data_api = await apiGetRoute(route_name, data_get);
    const cleanData = JSON.parse(JSON.stringify(data_api));
    await localforage.setItem(key, cleanData).catch((error) => console.error('[useInCache.ts] SAVE CACHE ERROR: ' + error.name, error));
    return data_api;
};
