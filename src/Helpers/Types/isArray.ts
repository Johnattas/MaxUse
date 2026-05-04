import { unref } from 'vue';

/**
 * Verifica se o valor é classificado como um Array.
 * Semelhante ao _.isArray do Lodash.
 *
 * @param value O valor a ser verificado.
 * @returns Retorna true se o valor for um array, caso contrário false.
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(unref(value));
}
