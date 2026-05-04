import { MaybeRefOrGetter } from 'vue';
type T = Record<string, any>;
type OrderCriteria<T> = keyof T | (keyof T)[] | {
    [K in keyof T]?: 'asc' | 'desc';
};
export declare function orderByWithKey(collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>, criteria: OrderCriteria<T>, object_keyBy: keyof T, order?: 'asc' | 'desc', defaultOrder?: 'asc' | 'desc'): Record<string, T>;
export {};
//# sourceMappingURL=orderByWithKey.d.ts.map