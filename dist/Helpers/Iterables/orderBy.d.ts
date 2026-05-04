import { Ref } from 'vue';
type T = Record<string, any> | any[] | null | undefined | string;
type OrderCriteria = string | null | any | any[] | Record<string, 'asc' | 'desc'>;
export declare function orderBy(collection: T | Ref<T>, criteria: OrderCriteria, defaultOrder?: 'asc' | 'desc'): T[];
export {};
//# sourceMappingURL=orderBy.d.ts.map