import { type MaybeRefOrGetter, toValue } from 'vue';

type TDateArray = Date[] | string[];
type Operator = 'and' | 'or';

export function isSameDay(dates: MaybeRefOrGetter<TDateArray>, operator: Operator = 'or'): boolean {
    const values = toValue(dates);

    if (!values || values.length <= 1) return true;

    const days = values.map((date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    });

    if (operator === 'and') return days.every((day) => day === days[0]);

    return new Set(days).size < days.length;
}
