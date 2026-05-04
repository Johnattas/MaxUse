import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
export declare function onlyLetters(value: RefString, space?: boolean): string;
export declare function onlyNumbers(value: RefString, space?: boolean): string;
export declare function onlySymbols(value: RefString): string;
export declare function onlyLettersAndNumbers(value: RefString, space?: boolean): string;
export declare function removeSpaces(value: RefString): string;
export {};
//# sourceMappingURL=filters.d.ts.map