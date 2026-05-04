import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
export declare function snakeCase(value: RefString): string;
export declare function kebabCase(value: RefString): string;
export declare function camelCase(value: RefString): string;
/**
 * Garante que apenas a primeira letra da string seja maiúscula e o restante minúscula.
 *
 * @param value A string a ser formatada.
 */
export declare function capitalize(value: RefString): string;
export {};
//# sourceMappingURL=cases.d.ts.map