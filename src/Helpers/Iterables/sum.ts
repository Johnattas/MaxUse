import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Calcula a soma dos valores em uma coleção.
 * Semelhante ao _.sum do Lodash.
 *
 * @param collection A coleção para iterar.
 * @returns Retorna a soma.
 */
export function sum(collection: MaybeRefOrGetter<number[] | any>): number {
    const data = toValue(collection);
    if (!data) return 0;

    const items = Array.isArray(data) ? data : Object.values(data);

    return items.reduce((acc, val) => {
        const num = parseFloat(val);
        return acc + (isNaN(num) ? 0 : num);
    }, 0);
}
