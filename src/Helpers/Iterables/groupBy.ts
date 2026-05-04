import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Agrupa os elementos de uma coleção de acordo com o resultado de um iteratee.
 * Semelhante ao _.groupBy do Lodash.
 *
 * @param collection A coleção para iterar.
 * @param iteratee O iteratee para transformar as chaves.
 * @returns Retorna o objeto agrupado.
 */
export function groupBy<T>(collection: MaybeRefOrGetter<T[] | Record<string, T> | any>, iteratee: string | ((item: T) => string | number)): Record<string, T[]> {
    const data = toValue(collection);
    if (!data) return {};

    const items = Array.isArray(data) ? data : Object.values(data);
    const result: Record<string, T[]> = {};

    for (const item of items) {
        let key: string | number;

        if (typeof iteratee === 'function') key = iteratee(item as T);
        else key = (item as any)[iteratee];


        // Garante que a chave seja uma string para o objeto resultante
        const groupKey = String(key);

        if (!result[groupKey]) result[groupKey] = [];

        result[groupKey].push(item as T);
    }

    return result;
}
