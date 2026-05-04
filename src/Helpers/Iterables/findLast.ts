import { unref } from 'vue';

/**
 * Encontra o último item de uma lista que satisfaça uma condição.
 *
 * @param collection A coleção para pesquisar.
 * @param predicate A função executada por iteração.
 * @returns Retorna o elemento correspondente encontrado, ou undefined.
 */
export function findLast<T>(
    collection: T[] | null | undefined,
    predicate: (value: T, index: number, collection: T[]) => boolean
): T | undefined {
    const data = unref(collection);

    if (!data || !Array.isArray(data)) return undefined;


    for (let i = data.length - 1; i >= 0; i--) if (predicate(data[i], i, data)) return data[i];


    return undefined;
}
