import { toValue, type MaybeRefOrGetter } from 'vue';
import { isBlank } from './isBlank';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

/**
 * Verifica se um valor é um número válido.
 * 
 * @param value O valor a ser verificado.
 * @returns Retorna true se for um número.
 */
export function isNumber(value: RefString): boolean {
    const data = toValue(value);
    if (isBlank(data, true)) return false;
    if (String(data).trim() === '') return false;
    return !Number.isNaN(Number(data));
}

export const isNumeric = isNumber;
export const numeric = isNumber;
