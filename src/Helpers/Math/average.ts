/**
 * Calcula a média aritmética de um array de números.
 *
 * @param numbers - Array de números.
 * @returns A média aritmética.
 */
export function average(numbers: number[]): number {
    if (numbers.length === 0) return 0;


    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}
