import { unref } from 'vue';
export function filter(collection, callback) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return Array.isArray(data) ? [] : {};
    if (Array.isArray(data))
        return data.filter((item) => callback(item));
    return Object.fromEntries(Object.entries(data).filter(([, item]) => callback(item)));
}
