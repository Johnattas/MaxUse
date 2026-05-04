import { unref } from 'vue';
/**
 * Cria uma cópia profunda de um valor, lidando com referências circulares e diversos tipos de dados.
 * Semelhante ao _.cloneDeep do Lodash.
 *
 * @param value O valor a ser clonado.
 * @param map Um WeakMap para rastrear referências circulares (uso interno).
 * @returns Uma cópia profunda do valor.
 */
export function deepClone(value, map = new WeakMap()) {
    // Resolve o valor se for uma Ref do Vue
    const data = unref(value);
    // Se não for um objeto ou for nulo, retorna o próprio valor (primitivos)
    if (data === null || typeof data !== 'object')
        return data;
    // Se já clonamos este objeto, retorna a referência existente (evita loops infinitos)
    if (map.has(data))
        return map.get(data);
    let clone;
    // Lida com instâncias de Date
    if (data instanceof Date)
        return new Date(data.getTime());
    // Lida com instâncias de RegExp
    if (data instanceof RegExp)
        return new RegExp(data.source, data.flags);
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
    for (const key of keys)
        clone[key] = deepClone(data[key], map);
    return clone;
}
