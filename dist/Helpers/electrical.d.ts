import { MaybeRefOrGetter } from 'vue';
type T = MaybeRefOrGetter<string | number | null>;
type Material = 'copper' | 'aluminum' | 'cobre' | 'aluminio' | 'alumínio' | 'cu' | 'al';
type Temperature = '90' | '70' | 90 | 70;
type Isolation = 'pvc' | 'epr' | 'xlpe';
type Phases = 1 | 2 | 3 | '1' | '2' | '3';
type Options = {
    material?: Material;
    isolation?: Temperature | Isolation;
    method?: 'b1' | 'b2' | 'c1' | 'c2' | 'd';
    length?: Number;
    voltage: 115 | 120 | 127 | 220 | 230 | 240 | 380 | 400 | 440 | 480;
    phases?: Phases;
    max_loss?: number;
    voltage_drop?: number;
};
declare function wireSize(current: T, options: Options): Promise<0 | "" | {
    wire: number;
    max_current: number;
    voltage_drop: number;
    loss_percent: number;
}>;
export declare const electrical: {
    wireSize: typeof wireSize;
};
export declare const electric: {
    wireSize: typeof wireSize;
};
export {};
//# sourceMappingURL=electrical.d.ts.map