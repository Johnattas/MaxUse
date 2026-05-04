import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any>;
export function sumBy(collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>, key: keyof T): number {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return 0;

    const items = Array.isArray(data) ? data : Object.values(data);

    return items.reduce((acc, item) => acc + (Number(item[key]) || 0), 0);
}
