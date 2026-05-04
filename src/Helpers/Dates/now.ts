/**
 * Obtém o timestamp em milissegundos que se passaram desde a Era Unix.
 * Semelhante ao _.now do Lodash.
 *
 * @returns Retorna o timestamp.
 */
export function now(): number {
    return Date.now();
}
