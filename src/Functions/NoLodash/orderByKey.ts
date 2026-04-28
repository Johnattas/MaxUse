import { type Ref } from 'vue';

type T = Record<string, any>;
type OrderCriteria<T> = keyof T | (keyof T)[] | { [K in keyof T]?: 'asc' | 'desc' };

export function orderByKey(collection: T | Ref<T>, criteria: OrderCriteria<T>, defaultOrder: 'asc' | 'desc' = 'desc'): T[] {
    const data = unref(collection);

    if (!data || typeof data !== 'object') return [];

    const items = Array.isArray(data) ? data : Object.values(data);

    const rules: { key: string; order: 'asc' | 'desc' }[] = [];

    if (typeof criteria === 'string') rules.push({ key: criteria, order: defaultOrder });
    else if (Array.isArray(criteria)) criteria.forEach((k) => rules.push({ key: k as string, order: defaultOrder }));
    else if (typeof criteria === 'object' && criteria !== null) for (const key in criteria) rules.push({ key, order: (criteria as any)[key] });

    return [...items].sort((a, b) => {
        for (const rule of rules) {
            const aValue = a[rule.key as keyof typeof a];
            const bValue = b[rule.key as keyof typeof b];

            if (aValue === bValue) continue;

            if (aValue === undefined || aValue === null) return rule.order === 'asc' ? -1 : 1;
            if (bValue === undefined || bValue === null) return rule.order === 'asc' ? 1 : -1;

            if (aValue < bValue) return rule.order === 'asc' ? -1 : 1;
            if (aValue > bValue) return rule.order === 'asc' ? 1 : -1;
        }

        return 0;
    });
}
