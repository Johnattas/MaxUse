import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
export declare function toSearchableString(value: RefString): string;
export declare const normalizeToSearch: typeof toSearchableString;
export declare function toNumber(value: RefString, decimals?: number | null): number;
/**
 * Formata um número para o padrão de moeda brasileira (R$).
 *
 * @param value O valor a ser formatado.
 */
export declare function formatCurrency(value: RefString): string;
/**
 * Converte um número bruto de bytes em uma string legível.
 *
 * @param bytes A quantidade de bytes.
 * @param decimals O número de casas decimais.
 */
export declare function formatBytes(bytes: MaybeRefOrGetter<number | string>, decimals?: MaybeRefOrGetter<number>): string;
export {};
//# sourceMappingURL=converters.d.ts.map