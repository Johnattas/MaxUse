import { MaybeRefOrGetter } from 'vue';
type T = Record<string, any>;
export declare function filterBy(collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>, key: keyof T, value?: T[keyof T] | unknown): T[] | Record<string, T>;
export {};
//# sourceMappingURL=filterBy.d.ts.map