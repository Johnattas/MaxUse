import { MaybeRefOrGetter } from 'vue';
type T = MaybeRefOrGetter<string | number | null>;
type Material = 'copper' | 'aluminum' | 'cobre' | 'aluminio' | 'alumínio' | 'cu' | 'al';
type Temperature = '90' | '70' | 90 | 70;
type Isolation = 'pvc' | 'epr' | 'xlpe';
type Phases = 1 | 2 | 3 | '1' | '2' | '3';
export type WireOptions = {
    material?: Material;
    isolation?: Temperature | Isolation;
    method?: 'a1' | 'a2' | 'b1' | 'b2' | 'c' | 'd' | 'e' | 'f' | 'g' | string;
    length?: number | string;
    voltage?: 115 | 120 | 127 | 220 | 230 | 240 | 380 | 400 | 440 | 480 | number | string;
    phases?: Phases;
    max_loss?: number | string;
    voltage_drop?: number | string;
    fca?: number | string;
    fct?: number | string;
    circuit_type?: 'lighting' | 'power' | 'iluminacao' | 'tomada' | 'forca' | string;
};
/**
 * Calcula a seção nominal de um cabo elétrico com base na corrente, opções de material, isolação, entre outros.
 *
 * @param current A corrente elétrica do circuito.
 * @param options Opções do cálculo, como material, tensão, método de instalação e distância.
 * @returns Um objeto com a bitola do cabo, a corrente máxima, a queda de tensão e a porcentagem de perda.
 */
export declare function wireSize(current: T, options: WireOptions): Promise<any>;
export declare const calculaCabo: typeof wireSize;
export {};
//# sourceMappingURL=wireSize.d.ts.map