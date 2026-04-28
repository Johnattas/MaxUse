import { type Ref, unref } from 'vue';

type T = Record<string, any>;
export function filterBy(collection: T[] | Record<string, T> | Ref<T[] | Record<string, T>> | null | undefined, key: keyof T, value: T[keyof T] | unknown = true): T[] | Record<string, T> {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return [];

    if (Array.isArray(data)) return data.filter((item) => item[key] === value);

    return Object.fromEntries(Object.entries(data).filter(([, item]) => item[key] === value));
}
