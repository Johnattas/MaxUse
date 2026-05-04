import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Define o valor em um caminho específico de um objeto.
 * Se o caminho não existir, ele será criado.
 *
 * @param object O objeto a ser modificado.
 * @param path O caminho da propriedade a ser definida (string ou array).
 * @param value O valor a ser definido.
 * @returns Retorna o objeto modificado.
 */
export function set<T = any>(object: MaybeRefOrGetter<any>, path: string | string[], value: any): T {
    const data = toValue(object);
    if (data === null || data === undefined) return object as any;

    const pathArray = Array.isArray(path)
        ? path
        : path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');

    let current = data;
    const length = pathArray.length;

    for (let i = 0; i < length; i++) {
        const key = pathArray[i];

        if (i === length - 1) current[key] = value;
        else {
            if (current[key] === undefined || current[key] === null || typeof current[key] !== 'object') current[key] = {};


            current = current[key];
        }
    }

    return object;
}
