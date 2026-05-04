import { unref } from 'vue';
export function sumBy(collection, key) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return 0;
    const items = Array.isArray(data) ? data : Object.values(data);
    return items.reduce((acc, item) => acc + (Number(item[key]) || 0), 0);
}
