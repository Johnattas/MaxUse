import { toValue, type MaybeRefOrGetter } from 'vue';

type T = Record<string, any> | any[] | null | undefined;

/**
 * Extrai e retorna um array plano (flat) contendo os valores de uma chave específica de todos os objetos em uma coleção.
 *
 * @param collection A coleção de objetos.
 * @param key A chave a ser extraída de cada objeto.
 * @param default_value O valor padrão a ser usado caso a chave não exista ou seja nula (padrão é false).
 * @returns Um array contendo os valores extraídos.
 */
export function valuesInKey(collection: MaybeRefOrGetter<T>, key: string, default_value: any = false) {
    const data = toValue(collection);

    if (!data || typeof data !== 'object') return [];

    const items = Array.isArray(data) ? data : Object.values(data);

    return items.flatMap((list: any) => {
        const value = list[key] ?? default_value;
        if (Array.isArray(value)) return value;
        if (typeof value === 'object') return Object.values(value);
        return [value];
    });
}
