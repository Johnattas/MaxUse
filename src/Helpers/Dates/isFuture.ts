import { toValue, type MaybeRefOrGetter } from 'vue';

type TDate = string | number | Date | null | undefined;

/**
 * Verifica se uma determinada data ainda está no futuro.
 *
 * @param dateValue A data a ser verificada.
 * @returns Retorna true se a data estiver no futuro.
 */
export function isFuture(dateValue: MaybeRefOrGetter<TDate>): boolean {
    const rawValue = toValue(dateValue);

    if (!rawValue) return false;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return false;

    return date.getTime() > Date.now();
}
