import { unref } from 'vue';
export function orderBy(collection, criteria, defaultOrder = 'desc') {
    const data = unref(collection);
    if (!data || typeof data !== 'object')
        return [];
    const items = Array.isArray(data) ? data : Object.values(data);
    const rules = [];
    if (typeof criteria === 'string')
        rules.push({ key: criteria, order: defaultOrder });
    else if (Array.isArray(criteria))
        criteria.forEach((k) => rules.push({ key: k, order: defaultOrder }));
    else if (typeof criteria === 'object' && criteria !== null)
        for (const key in criteria)
            rules.push({ key: key, order: criteria[key] });
    return [...items].sort((a, b) => {
        for (const rule of rules) {
            const valA = a[rule.key];
            const valB = b[rule.key];
            if (valA < valB)
                return rule.order === 'asc' ? -1 : 1;
            if (valA > valB)
                return rule.order === 'asc' ? 1 : -1;
        }
        return 0;
    });
}
