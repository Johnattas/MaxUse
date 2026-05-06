import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Divide um array em sub-arrays de um tamanho específicado.
 *
 * @param array O array a ser dividido.
 * @param size O tamanho de cada pedaço.
 */
export function chunk<T>(array: MaybeRefOrGetter<T[]>, size: number = 1): T[][] {
    const data = toValue(array);
    if (!data || data.length === 0 || size <= 0) return [];

    const result: T[][] = [];
    for (let i = 0; i < data.length; i += size) result.push(data.slice(i, i + size));

    return result;
}
