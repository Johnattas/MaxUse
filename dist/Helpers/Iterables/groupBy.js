import { unref } from 'vue';
/**
 * Agrupa os elementos de uma coleção de acordo com o resultado de um iteratee.
 * Semelhante ao _.groupBy do Lodash.
 *
 * @param collection A coleção para iterar.
 * @param iteratee O iteratee para transformar as chaves.
 * @returns Retorna o objeto agrupado.
 */
export function groupBy(collection, iteratee) {
    const data = unref(collection);
    if (!data)
        return {};
    const items = Array.isArray(data) ? data : Object.values(data);
    const result = {};
    for (const item of items) {
        let key;
        if (typeof iteratee === 'function')
            key = iteratee(item);
        else
            key = item[iteratee];
        // Garante que a chave seja uma string para o objeto resultante
        const groupKey = String(key);
        if (!result[groupKey])
            result[groupKey] = [];
        result[groupKey].push(item);
    }
    return result;
}
