import { unref } from 'vue';
import { isObject } from '../Types/isObject';
import { isArray } from '../Types/isArray';

/**
 * Une dois ou mais objetos de forma profunda, mesclando inclusive propriedades aninhadas.
 * Útil para lidar com configurações padrão que precisam ser sobrescritas parcialmente por configurações do usuário.
 *
 * @param target O objeto alvo que receberá as propriedades.
 * @param sources Um ou mais objetos de origem para mesclar.
 * @returns O objeto mesclado (modifica o primeiro objeto e o retorna).
 */
export function deepMerge<T extends object>(target: T, ...sources: any[]): T {
    if (!sources.length) return target;
    const source = sources.shift();

    const dataTarget = unref(target) as any;
    const dataSource = unref(source);

    if (isObject(dataTarget) && !isArray(dataTarget) && isObject(dataSource) && !isArray(dataSource)) Object.keys(dataSource).forEach((key) => {
        const targetValue = dataTarget[key];
        const sourceValue = dataSource[key];

        if (isObject(sourceValue) && !isArray(sourceValue)) {
            if (!targetValue || !isObject(targetValue) || isArray(targetValue)) dataTarget[key] = {};

            deepMerge(dataTarget[key], sourceValue);
        } else dataTarget[key] = sourceValue;

    });


    return deepMerge(target, ...sources);
}
