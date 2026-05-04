import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
export declare function toSearchableString(value: RefString): string;
export declare const normalizeToSearch: typeof toSearchableString;
export declare function toNumber(value: RefString, decimals?: number | null): number;
export {};
//# sourceMappingURL=converters.d.ts.map