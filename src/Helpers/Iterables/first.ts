import { unref } from 'vue';

/**
 * Retorna o primeiro elemento de um array de forma segura.
 *
 * @param array O array para obter o elemento.
 * @returns O primeiro elemento do array ou undefined se o array estiver vazio.
 */
export function first<T>(array: T[] | null | undefined): T | undefined {
    const data = unref(array);
    if (!Array.isArray(data) || data.length === 0) return undefined;

    return data[0];
}
