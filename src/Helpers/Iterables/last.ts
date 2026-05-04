import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Retorna o último elemento de um array de forma segura.
 *
 * @param array O array para obter o elemento.
 * @returns O último elemento do array ou undefined se o array estiver vazio.
 */
export function last<T>(array: MaybeRefOrGetter<T[] | null | undefined>): T | undefined {
    const data = toValue(array);
    if (!Array.isArray(data) || data.length === 0) return undefined;

    return data[data.length - 1];
}
