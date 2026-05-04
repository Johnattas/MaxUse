import { type MaybeRefOrGetter } from 'vue';
import { keyBy } from './keyBy';
import { orderBy } from './orderBy';

type T = Record<string, any>;
type OrderCriteria<T> = keyof T | (keyof T)[] | { [K in keyof T]?: 'asc' | 'desc' };

export function orderByWithKey(
    collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>,
    criteria: OrderCriteria<T>,
    object_keyBy: keyof T,
    order: 'asc' | 'desc' = 'asc',
    defaultOrder: 'asc' | 'desc' = 'asc'
): Record<string, T> {
    const in_order = orderBy(collection, criteria, defaultOrder);
    return keyBy(in_order, object_keyBy) as Record<string, T>;
}
