import { type Ref, unref } from 'vue';

type T = Record<string, any> | any[] | null | undefined;
export function filterByNot(collection: T | Ref<T>, key: string, value: any = true): T[] | Record<string, T> {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return Array.isArray(data) ? [] : {};


    const isExcluded = (item: any) => {
        const itemValue = item?.[key];

        if (Array.isArray(value)) return value.includes(itemValue);


        return itemValue === value;
    };

    if (Array.isArray(data)) return data.filter((item: any) => !isExcluded(item));


    return Object.fromEntries(Object.entries(data).filter(([, item]: [string, any]) => !isExcluded(item)));
}
