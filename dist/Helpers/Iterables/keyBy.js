import { unref } from 'vue';
export function keyBy(collection, key) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return {};
    const items = Array.isArray(data) ? data : Object.values(data);
    return Object.fromEntries(items.map((item) => {
        const k = item[key];
        const strKey = k !== null && k !== '' && !isNaN(Number(k)) ? String(k) + ' ' : String(k);
        return [strKey, item];
    }));
}
