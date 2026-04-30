declare function getUlid(): string;
type Typecode = `${string}${'lower' | 'ulid' | 'upper'}${string}`;
export declare function Random(arg1?: number | Typecode, arg2?: number | Typecode): string;
export declare function ulid(): string;
export declare function intervalRandom(min?: number, max?: number): number;
export declare const Str: {
    Random: typeof Random;
    code: typeof Random;
    ulid: typeof getUlid;
    intervalRandom: typeof intervalRandom;
    interval: typeof intervalRandom;
    numberInterval: typeof intervalRandom;
    numberRandom: typeof intervalRandom;
};
export {};
//# sourceMappingURL=str.d.ts.map