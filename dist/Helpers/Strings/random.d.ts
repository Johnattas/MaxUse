type Typecode = `${string}${'lower' | 'ulid' | 'upper'}${string}`;
/**
 * Gera uma string aleatória.
 *
 * @param arg1 Comprimento ou código de tipo.
 * @param arg2 Comprimento ou código de tipo.
 * @returns Retorna a string gerada.
 */
export declare function Random(arg1?: number | Typecode, arg2?: number | Typecode): string;
export declare function ulid(): string;
/**
 * Gera um número aleatório em um intervalo.
 *
 * @param min Valor mínimo.
 * @param max Valor máximo.
 * @returns Retorna o número gerado.
 */
export declare function intervalRandom(min?: number, max?: number): number;
export {};
//# sourceMappingURL=random.d.ts.map