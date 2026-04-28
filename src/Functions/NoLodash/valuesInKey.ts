import { type Ref, unref } from 'vue';

type T = Record<string, any> | any[] | null | undefined;
export function valuesInKey(collection: T | Ref<T>, key: string, default_value: any = false) {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return [];

    const items = Array.isArray(data) ? data : Object.values(data);

    return items.flatMap((list: any) => {
        const value = list[key] ?? default_value;
        if (Array.isArray(value)) return value;
        if (typeof value === 'object') return Object.values(value);
        return [value];
    });
}
