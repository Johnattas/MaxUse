import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Arredonda um número para baixo com uma quantidade específica de casas decimais.
 *
 * @param value - O número a ser arredondado.
 * @param decimals - O número de casas decimais (padrão 0).
 * @returns O número arredondado para baixo.
 */
export function roundDown(value: MaybeRefOrGetter<number>, decimals: MaybeRefOrGetter<number> = 0): number {
    const rawValue = toValue(value);
    const rawDecimals = toValue(decimals);
    const factor = Math.pow(10, rawDecimals);
    return Math.floor(rawValue * factor) / factor;
}
