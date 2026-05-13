import { type MaybeRefOrGetter } from 'vue';
import { hasContent } from './hasContent';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

/**
 * Verifica se um valor está "em branco".
 *
 * @param value O valor a ser verificado.
 * @param if_zero Se true, considera o número 0 como NÃO estando em branco.
 * @returns Retorna true se estiver em branco.
 */
export function isBlank(value: RefString, if_zero: boolean = false): boolean {
    return !hasContent(value, if_zero);
}

export const isEmpty = isBlank;