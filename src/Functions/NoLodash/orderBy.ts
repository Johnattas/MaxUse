import { type Ref, unref } from 'vue';

type T = Record<string, any>;
type OrderCriteria = string | null | keyof T | (keyof T)[] | { [K in string]?: 'asc' | 'desc' };

export function orderBy(collection: T | Ref<T>, criteria: OrderCriteria, defaultOrder: 'asc' | 'desc' = 'desc'): T[] {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return [];

    const items = Array.isArray(data) ? data : Object.values(data);

    const rules: { key: string; order: 'asc' | 'desc' }[] = [];

    if (typeof criteria === 'string') rules.push({ key: criteria, order: defaultOrder });
    else if (Array.isArray(criteria)) criteria.forEach((k) => rules.push({ key: k as string, order: defaultOrder }));
    else if (typeof criteria === 'object' && criteria !== null) for (const key in criteria) rules.push({ key, order: (criteria as any)[key] });

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
