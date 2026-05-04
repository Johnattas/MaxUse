import { unref } from 'vue';
/**
 * Verifica se o valor é classificado como um objeto (objetos, arrays, funções, regexes, etc).
 * Semelhante ao _.isObject do Lodash.
 *
 * @param value O valor a ser verificado.
 * @returns Retorna true se o valor for um objeto, caso contrário false.
 */
export function isObject(value) {
    const data = unref(value);
    const type = typeof data;
    return data !== null && (type === 'object' || type === 'function');
}
