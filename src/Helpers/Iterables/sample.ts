import { unref } from 'vue';

/**
 * Obtém um elemento aleatório de uma coleção.
 * Semelhante ao _.sample do Lodash.
 *
 * @param collection A coleção de onde extrair o elemento.
 * @returns Retorna o elemento aleatório.
 */
export function sample<T>(collection: T[] | Record<string, T> | any): T | undefined {
    const data = unref(collection);
    if (!data) return undefined;

    const items = Array.isArray(data) ? data : Object.values(data);
    if (items.length === 0) return undefined;

    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex] as T;
}
