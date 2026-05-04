import { unref } from 'vue';
export function valuesInKey(collection, key, default_value = false) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return [];
    const items = Array.isArray(data) ? data : Object.values(data);
    return items.flatMap((list) => {
        const value = list[key] ?? default_value;
        if (Array.isArray(value))
            return value;
        if (typeof value === 'object')
            return Object.values(value);
        return [value];
    });
}
