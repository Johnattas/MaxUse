import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any> | any[] | null | undefined;
export function filterByNot(collection: MaybeRefOrGetter<T>, key: string, value: any = true): T[] | Record<string, T> {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return Array.isArray(data) ? [] : {};

    const isExcluded = (item: any) => {
        const itemValue = item?.[key];
        if (Array.isArray(value)) return value.includes(itemValue);
        return itemValue === value;
    };

    if (Array.isArray(data)) return data.filter((item) => !isExcluded(item));

    return Object.fromEntries(Object.entries(data).filter(([, item]) => !isExcluded(item)));
}
