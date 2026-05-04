import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any>;

/**
 * Filtra uma coleção mantendo apenas os elementos que possuem um determinado valor para uma chave.
 *
 * @param collection A coleção de objetos.
 * @param key A chave a ser verificada.
 * @param value O valor a ser comparado (padrão é true).
 * @returns A coleção filtrada.
 */
export function filterBy(collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>, key: keyof T, value: T[keyof T] | unknown = true): T[] | Record<string, T> {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return [];

    if (Array.isArray(data)) return data.filter((item) => item[key] === value);

    return Object.fromEntries(Object.entries(data).filter(([, item]) => item[key] === value));
}
