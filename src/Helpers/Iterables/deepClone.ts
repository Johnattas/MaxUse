import { unref } from 'vue';

/**
 * Cria uma cópia profunda de um valor, lidando com referências circulares e diversos tipos de dados.
 * Semelhante ao _.cloneDeep do Lodash.
 *
 * @param value O valor a ser clonado.
 * @param map Um WeakMap para rastrear referências circulares (uso interno).
 * @returns Uma cópia profunda do valor.
 */
export function deepClone<T>(value: T, map = new WeakMap()): T {
    // Resolve o valor se for uma Ref do Vue
    const data = unref(value);

    // Se não for um objeto ou for nulo, retorna o próprio valor (primitivos)
    if (data === null || typeof data !== 'object') return data as T;


    // Se já clonamos este objeto, retorna a referência existente (evita loops infinitos)
    if (map.has(data)) return map.get(data);


    let clone: any;

    // Lida com instâncias de Date
    if (data instanceof Date) return new Date(data.getTime()) as any;


    // Lida com instâncias de RegExp
    if (data instanceof RegExp) return new RegExp(data.source, data.flags) as any;


    // Lida com instâncias de Map
    if (data instanceof Map) {
        clone = new Map();
        map.set(data, clone);
        data.forEach((val, key) => {
            clone.set(deepClone(key, map), deepClone(val, map));
        });
        return clone;
    }

    // Lida com instâncias de Set
    if (data instanceof Set) {
        clone = new Set();
        map.set(data, clone);
        data.forEach((val) => {
            clone.add(deepClone(val, map));
        });
        return clone;
    }

    // Lida com Arrays e Objetos comuns
    clone = Array.isArray(data) ? [] : {};
    map.set(data, clone);

    // Copia propriedades recursivamente
    const keys = [...Object.keys(data), ...Object.getOwnPropertySymbols(data)];
    for (const key of keys) clone[key] = deepClone((data as any)[key], map);


    return clone as T;
}
