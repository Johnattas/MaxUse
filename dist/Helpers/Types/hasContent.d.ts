import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
/**
 * Verifica se um valor possui conteúdo (não é nulo, indefinido, string vazia, array vazio, etc).
 *
 * @param value O valor a ser verificado.
 * @param if_zero Se true, considera o número 0 como tendo conteúdo.
 * @returns Retorna true se houver conteúdo.
 */
export declare function hasContent(value: RefString, if_zero?: boolean): boolean;
export {};
//# sourceMappingURL=hasContent.d.ts.map