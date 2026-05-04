import { unref } from 'vue';

/**
 * Remove a propriedade em um caminho específico de um objeto.
 * Semelhante ao _.unset do Lodash.
 *
 * @param object O objeto a ser modificado.
 * @param path O caminho da propriedade a ser removida (string ou array).
 * @returns Retorna true se a propriedade for removida com sucesso, caso contrário false.
 */
export function unset(object: any, path: string | string[]): boolean {
    const data = unref(object);
    if (data === null || typeof data !== 'object') return false;

    const pathArray = Array.isArray(path)
        ? path
        : path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.');

    let current = data;
    for (let i = 0; i < pathArray.length - 1; i++) {
        const key = pathArray[i];
        if (!(key in current)) return true; // Caminho não existe, nada a remover
        current = current[key];
        if (current === null || typeof current !== 'object') return true;
    }

    const lastKey = pathArray[pathArray.length - 1];
    return delete current[lastKey];
}
