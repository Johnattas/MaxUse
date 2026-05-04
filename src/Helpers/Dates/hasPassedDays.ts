import { toValue, type MaybeRefOrGetter } from 'vue';

type TPassed = string | Date | null | undefined;

/**
 * Verifica se um determinado número de dias se passou desde a data fornecida.
 *
 * @param dateValue A data inicial.
 * @param days Quantidade de dias.
 * @returns Retorna true se o tempo já passou.
 */
export function hasPassedDays(dateValue: MaybeRefOrGetter<TPassed>, days: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = days * 24 * 60 * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}
