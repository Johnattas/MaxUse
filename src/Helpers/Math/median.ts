import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Calcula a mediana de uma lista de números.
 * A mediana é excelente para estatísticas onde existem valores discrepantes (outliers)
 * que distorceriam a média aritmética.
 *
 * @param numbers - Array de números.
 * @returns A mediana dos números.
 */
export function median(numbers: MaybeRefOrGetter<number[]>): number {
    const data = toValue(numbers);
    if (data.length === 0) return 0;

    const sorted = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) return (sorted[middle - 1] + sorted[middle]) / 2;

    return sorted[middle];
}
