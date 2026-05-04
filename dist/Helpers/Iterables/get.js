import { unref } from 'vue';
/**
 * Obtém o valor no caminho específico de um objeto.
 * Semelhante ao _.get do Lodash.
 *
 * @param object O objeto para consultar.
 * @param path O caminho da propriedade a ser obtida (string ou array).
 * @param defaultValue O valor retornado se o caminho resolvido for undefined.
 * @returns Retorna o valor resolvido.
 */
export function get(object, path, defaultValue) {
    const data = unref(object);
    if (data === null || data === undefined)
        return defaultValue;
    const pathArray = Array.isArray(path)
        ? path
        : path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');
    let result = data;
    for (const key of pathArray) {
        if (result === null || result === undefined)
            break;
        result = result[key];
    }
    return result === undefined ? defaultValue : result;
}
