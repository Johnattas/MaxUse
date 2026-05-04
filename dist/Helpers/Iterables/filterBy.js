import { unref } from 'vue';
export function filterBy(collection, key, value = true) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return [];
    if (Array.isArray(data))
        return data.filter((item) => item[key] === value);
    return Object.fromEntries(Object.entries(data).filter(([, item]) => item[key] === value));
}
