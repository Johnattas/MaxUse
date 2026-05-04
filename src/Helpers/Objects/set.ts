import { isRef } from 'vue';

/**
 * Define o valor em um caminho específico de um objeto.
 * Se o caminho não existir, ele será criado.
 *
 * @param object O objeto a ser modificado.
 * @param path O caminho da propriedade a ser definida (string ou array).
 * @param value O valor a ser definido.
 * @returns Retorna o objeto modificado.
 */
export function set<T = any>(object: any, path: string | string[], value: any): T {
    if (object === null || object === undefined) return object;

    const pathArray = Array.isArray(path)
        ? path
        : path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');

    let current = isRef(object) ? object.value : object;
    const length = pathArray.length;

    for (let i = 0; i < length; i++) {
        const key = pathArray[i];

        if (i === length - 1) if (isRef(current)) (current.value as any)[key] = value;
        else current[key] = value;
        else {
            if (isRef(current)) current = current.value;

            if (current[key] === undefined || current[key] === null || typeof current[key] !== 'object') current[key] = {};


            current = current[key];
        }
    }

    return object;
}
