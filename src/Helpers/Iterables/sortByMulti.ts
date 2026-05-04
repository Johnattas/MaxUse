import { unref } from 'vue';

/**
 * Ordena um array por múltiplos critérios.
 *
 * @param collection A coleção para ordenar.
 * @param criteria Lista de critérios (string de chave ou função de extração de valor).
 * @param orders Lista de ordens ('asc' ou 'desc') correspondente aos critérios.
 * @returns Retorna o novo array ordenado.
 */
export function sortByMulti<T>(
    collection: T[] | null | undefined,
    criteria: ((item: T) => any | string)[],
    orders: ('asc' | 'desc')[] = []
): T[] {
    const data = unref(collection);
    if (!data || !Array.isArray(data)) return [];

    return [...data].sort((a, b) => {
        for (let i = 0; i < criteria.length; i++) {
            const criterion = criteria[i];
            const order = orders[i] || 'asc';

            let valA: any;
            let valB: any;

            if (typeof criterion === 'function') {
                valA = criterion(a);
                valB = criterion(b);
            } else {
                valA = (a as any)[criterion];
                valB = (b as any)[criterion];
            }

            if (valA !== valB) {
                // Tratamento de nulos/undefined (coloca no final)
                if (valA === undefined || valA === null) return 1;
                if (valB === undefined || valB === null) return -1;

                if (order === 'asc') return valA < valB ? -1 : 1;
                else return valA < valB ? 1 : -1;

            }
        }
        return 0;
    });
}
