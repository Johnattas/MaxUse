import { unref } from 'vue';

/**
 * Cria uma versão sem duplicatas de um array.
 * Semelhante ao _.uniq do Lodash.
 *
 * @param array O array a ser processado.
 * @returns Retorna o novo array de valores únicos.
 */
export function uniq<T>(array: T[] | any): T[] {
    const data = unref(array);
    if (!Array.isArray(data)) return [];

    return Array.from(new Set(data));
}
