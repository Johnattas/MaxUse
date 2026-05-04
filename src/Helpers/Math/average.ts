import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Calcula a média aritmética de um array de números.
 *
 * @param numbers - Array de números.
 * @returns A média aritmética.
 */
export function average(numbers: MaybeRefOrGetter<number[]>): number {
    const data = toValue(numbers);
    if (data.length === 0) return 0;

    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}
