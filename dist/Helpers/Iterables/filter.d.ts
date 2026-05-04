import { MaybeRefOrGetter } from 'vue';
type T = Record<string, any> | any[] | null | undefined;
export declare function filter(collection: MaybeRefOrGetter<T>, callback: (card: any) => void): T[] | Record<string, T>;
export {};
//# sourceMappingURL=filter.d.ts.map