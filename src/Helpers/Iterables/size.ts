import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any> | string | number | null | undefined;
export function size(value: MaybeRefOrGetter<T>, allow_number: boolean = true): number {
    const data: any = toValue(value);

    if (!data || data === '' || data === ' ') return 0;

    if (typeof data === 'number' && allow_number) return data;

    if (Array.isArray(data) || typeof data === 'string') return data.length;

    if (data instanceof Map || data instanceof Set) return data.size;

    if (typeof data === 'object') return Object.keys(data).length;

    return data.length;
}
