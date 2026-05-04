import { unref } from 'vue';
export function size(value, allow_number = true) {
    const data = unref(value);
    if (!data || data === '' || data === ' ')
        return 0;
    if (typeof data === 'number' && allow_number)
        return data;
    if (Array.isArray(data) || typeof data === 'string')
        return data.length;
    if (data instanceof Map || data instanceof Set)
        return data.size;
    if (typeof data === 'object')
        return Object.keys(data).length;
    return data.length;
}
