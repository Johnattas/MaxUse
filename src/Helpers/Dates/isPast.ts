import { toValue, type MaybeRefOrGetter } from 'vue';

type TDate = string | number | Date | null | undefined;

/**
 * Verifica se uma determinada data já passou.
 *
 * @param dateValue A data a ser verificada.
 * @returns Retorna true se a data estiver no passado.
 */
export function isPast(dateValue: MaybeRefOrGetter<TDate>): boolean {
    const rawValue = toValue(dateValue);

    if (!rawValue) return false;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return false;

    return date.getTime() < Date.now();
}
