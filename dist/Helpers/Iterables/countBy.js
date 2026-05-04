import { unref } from 'vue';
export function countBy(collection, key, value = true) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return 0;
    const items = Array.isArray(data) ? data : Object.values(data);
    return items.reduce((acc, item) => acc + (item[key] === value ? 1 : 0), 0);
}
