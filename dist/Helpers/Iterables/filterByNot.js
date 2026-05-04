import { unref } from 'vue';
export function filterByNot(collection, key, value = true) {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return Array.isArray(data) ? [] : {};
    const isExcluded = (item) => {
        const itemValue = item?.[key];
        if (Array.isArray(value))
            return value.includes(itemValue);
        return itemValue === value;
    };
    if (Array.isArray(data))
        return data.filter((item) => !isExcluded(item));
    return Object.fromEntries(Object.entries(data).filter(([, item]) => !isExcluded(item)));
}
