import { type Ref, unref } from 'vue';

type T = Record<string, any> | any[] | null | undefined;
export function keyBy(collection: T | Ref<T[]>, key: string): Record<string, T> {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return {};

    const items = Array.isArray(data) ? data : Object.values(data);

    return Object.fromEntries(
        items.map((item) => {
            const k = item[key];
            const strKey = k !== null && k !== '' && !isNaN(Number(k)) ? String(k) + ' ' : String(k);
            return [strKey, item];
        })
    );
}
