import { toValue, type MaybeRefOrGetter } from 'vue';

type TDateArray = Date[] | string[];
type Operator = 'and' | 'or';

/**
 * Verifica se as datas fornecidas são do mesmo dia.
 *
 * @param dates Array de datas.
 * @param operator Operador de comparação ('and' ou 'or').
 * @returns Retorna true conforme o operador.
 */
export function isSameDay(dates: MaybeRefOrGetter<TDateArray>, operator: Operator = 'or'): boolean {
    const values = toValue(dates);

    if (!values || values.length <= 1) return true;

    const days = values.map((date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    });

    if (operator === 'and') return days.every((day) => day === days[0]);

    const uniqueDays = new Set(days);
    return uniqueDays.size < days.length;
}
