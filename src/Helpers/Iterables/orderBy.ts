import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any> | any[] | null | undefined | string;
type OrderCriteria = string | null | any | any[] | Record<string, 'asc' | 'desc'>;

/**
 * Ordena uma coleção de objetos com base em um ou mais critérios.
 *
 * @param collection A coleção de objetos a ser ordenada.
 * @param criteria O(s) critério(s) de ordenação (string, array de strings ou objeto com chaves e direções).
 * @param defaultOrder A direção de ordenação padrão se não for especificada (padrão é 'desc').
 * @returns Um novo array contendo a coleção ordenada.
 */
export function orderBy(collection: MaybeRefOrGetter<T>, criteria: OrderCriteria, defaultOrder: 'asc' | 'desc' = 'desc'): T[] {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return [];

    const items = Array.isArray(data) ? data : Object.values(data);

    const rules: { key: any; order: 'asc' | 'desc' }[] = [];

    if (typeof criteria === 'string') rules.push({ key: criteria, order: defaultOrder });
    else if (Array.isArray(criteria)) criteria.forEach((k) => rules.push({ key: k, order: defaultOrder }));
    else if (typeof criteria === 'object' && criteria !== null) for (const key in criteria) rules.push({ key: key, order: (criteria as any)[key] as 'asc' | 'desc' });

    return [...items].sort((a, b) => {
        for (const rule of rules) {
            const valA = a[rule.key];
            const valB = b[rule.key];

            if (valA < valB) return rule.order === 'asc' ? -1 : 1;
            if (valA > valB) return rule.order === 'asc' ? 1 : -1;
        }

        return 0;
    });
}
