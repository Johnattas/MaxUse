import { toValue, type MaybeRefOrGetter } from 'vue';

type TDate = string | Date | null | undefined;
type IDateInterval = { start: Date | string; end?: Date | string | null };

/**
 * Verifica se uma data está dentro de um intervalo.
 *
 * @param value A data a ser verificada.
 * @param interval O intervalo (início e fim).
 * @returns Retorna true se estiver no intervalo.
 */
export function inDateInterval(value: MaybeRefOrGetter<TDate>, interval: MaybeRefOrGetter<IDateInterval>): boolean {
    const targetDate: any = toValue(value);
    const rawInterval: any = toValue(interval);

    if (!targetDate || !rawInterval) return true;

    const target = new Date(targetDate).getTime();
    const start = new Date(rawInterval.start).getTime();
    const end = rawInterval.end ? new Date(rawInterval.end).getTime() : false;

    return target >= start && (!end || target <= end);
}

/**
 * Alias para inDateInterval. Verifica se uma data está dentro de um intervalo.
 *
 * @param value A data a ser verificada.
 * @param interval O intervalo (início e fim).
 * @returns Retorna true se estiver no intervalo.
 */
export function isInDateInterval(value: MaybeRefOrGetter<TDate>, interval: MaybeRefOrGetter<IDateInterval>): boolean {
    return inDateInterval(value, interval);
}
