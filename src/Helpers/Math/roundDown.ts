/**
 * Arredonda um número para baixo com uma quantidade específica de casas decimais.
 *
 * @param value - O número a ser arredondado.
 * @param decimals - O número de casas decimais (padrão 0).
 * @returns O número arredondado para baixo.
 */
export function roundDown(value: number, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.floor(value * factor) / factor;
}
