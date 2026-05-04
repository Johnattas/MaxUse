import { toValue, type MaybeRefOrGetter } from 'vue';

type TPassed = string | Date | null | undefined;

/**
 * Verifica se um determinado número de minutos se passou desde a data fornecida.
 *
 * @param dateValue A data inicial.
 * @param minutes Quantidade de minutos.
 * @returns Retorna true se o tempo já passou.
 */
export function hasPassedMinutes(dateValue: MaybeRefOrGetter<TPassed>, minutes: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = minutes * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}
