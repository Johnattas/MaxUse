import { type MaybeRefOrGetter } from 'vue';
import { keyBy } from './keyBy';
import { orderBy } from './orderBy';

type T = Record<string, any>;
type OrderCriteria<T> = keyof T | (keyof T)[] | { [K in keyof T]?: 'asc' | 'desc' };

/**
 * Ordena uma coleção de objetos com base em critérios e, em seguida, mapeia os resultados para um objeto indexado por uma chave específica.
 *
 * @param collection A coleção de objetos a ser ordenada e indexada.
 * @param criteria O(s) critério(s) de ordenação.
 * @param object_keyBy A chave a ser usada como índice do objeto retornado.
 * @param order A direção de ordenação (padrão é 'asc').
 * @param defaultOrder A direção de ordenação padrão.
 * @returns Um objeto mapeado pela chave e ordenado de acordo com os critérios.
 */
export function orderByWithKey(
    collection: MaybeRefOrGetter<T[] | Record<string, T> | null | undefined>,
    criteria: OrderCriteria<T>,
    object_keyBy: keyof T,
    order: 'asc' | 'desc' = 'asc',
    defaultOrder: 'asc' | 'desc' = 'asc'
): Record<string, T> {
    const in_order = orderBy(collection, criteria, defaultOrder);
    return keyBy(in_order, object_keyBy) as Record<string, T>;
}
