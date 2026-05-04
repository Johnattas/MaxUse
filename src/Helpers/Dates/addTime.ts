import { toValue, type MaybeRefOrGetter } from 'vue';

type TDate = string | number | Date | null | undefined;
type TUnit = 'day' | 'days' | 'month' | 'months' | 'year' | 'years' | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds';

/**
 * Adiciona ou subtrai uma quantidade específica de tempo a uma data.
 *
 * @param dateValue A data base.
 * @param amount A quantidade de tempo a adicionar (ou subtrair se negativo).
 * @param unit A unidade de tempo.
 * @returns Retorna o objeto Date resultante.
 */
export function addTime(
    dateValue: MaybeRefOrGetter<TDate>,
    amount: MaybeRefOrGetter<number>,
    unit: MaybeRefOrGetter<TUnit> = 'days'
): Date | null {
    const rawDate = toValue(dateValue);
    const rawAmount = toValue(amount);
    const rawUnit = toValue(unit).toLowerCase() as TUnit;

    if (!rawDate) return null;

    const date = new Date(rawDate);
    if (isNaN(date.getTime())) return null;

    switch (rawUnit) {
        case 'day':
        case 'days':
            date.setDate(date.getDate() + rawAmount);
            break;
        case 'month':
        case 'months':
            date.setMonth(date.getMonth() + rawAmount);
            break;
        case 'year':
        case 'years':
            date.setFullYear(date.getFullYear() + rawAmount);
            break;
        case 'hour':
        case 'hours':
            date.setHours(date.getHours() + rawAmount);
            break;
        case 'minute':
        case 'minutes':
            date.setMinutes(date.getMinutes() + rawAmount);
            break;
        case 'second':
        case 'seconds':
            date.setSeconds(date.getSeconds() + rawAmount);
            break;
    }

    return date;
}
