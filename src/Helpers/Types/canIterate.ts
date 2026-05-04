/**
 * Verifica se um objeto é iterável.
 * 
 * @param obj O objeto a ser verificado.
 * @returns Retorna true se for iterável.
 */
export function canIterate<T>(obj: any): obj is Iterable<T> {
    return typeof obj?.[Symbol.iterator] === 'function';
}

export const isIterable = canIterate;
