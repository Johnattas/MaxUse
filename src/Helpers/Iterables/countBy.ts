import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any> | null | undefined;

export function countBy(collection: MaybeRefOrGetter<T>, key: string, value: T[keyof T] | any = true): number {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return 0;

    const items = Array.isArray(data) ? data : Object.values(data);

    return items.reduce((acc, item) => acc + (item[key] === value ? 1 : 0), 0);
}
