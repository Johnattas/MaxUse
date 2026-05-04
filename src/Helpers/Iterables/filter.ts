import { type Ref, unref } from 'vue';

type T = Record<string, any> | any[] | null | undefined;

export function filter(collection: T | Ref<T>, callback: (card: any) => void): T[] | Record<string, T> {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return Array.isArray(data) ? [] : {};

    if (Array.isArray(data)) return data.filter((item) => callback(item));

    return Object.fromEntries(Object.entries(data).filter(([, item]) => callback(item)));
}
