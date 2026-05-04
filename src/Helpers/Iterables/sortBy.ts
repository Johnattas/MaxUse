import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Cria um array de elementos, ordenados em ordem crescente pelos resultados da execução de cada iteratee.
 * Semelhante ao _.sortBy do Lodash.
 *
 * @param collection A coleção para iterar.
 * @param iteratees Os iteratees para ordenar.
 * @returns Retorna o novo array ordenado.
 */
export function sortBy<T>(collection: MaybeRefOrGetter<T[] | Record<string, T> | any>, iteratees: any | any[] = [(x: any) => x]): T[] {
    const data = toValue(collection);
    if (!data) return [];

    const items = Array.isArray(data) ? [...data] : Object.values(data);
    const iters = Array.isArray(iteratees) ? iteratees : [iteratees];

    return items.sort((a, b) => {
        for (const iteratee of iters) {
            let valA: any;
            let valB: any;

            if (typeof iteratee === 'function') {
                valA = iteratee(a);
                valB = iteratee(b);
            } else if (typeof iteratee === 'string') {
                valA = a[iteratee];
                valB = b[iteratee];
            } else {
                valA = a;
                valB = b;
            }

            if (valA !== valB) {
                if (valA === undefined) return 1;
                if (valB === undefined) return -1;
                if (valA === null) return 1;
                if (valB === null) return -1;

                return valA < valB ? -1 : 1;
            }
        }
        return 0;
    });
}
