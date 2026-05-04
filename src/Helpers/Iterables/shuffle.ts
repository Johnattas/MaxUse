import { toValue, type MaybeRefOrGetter } from 'vue';

/**
 * Embaralha os elementos de um array de forma aleatória.
 * Algoritmo de Fisher-Yates.
 *
 * @param array O array a ser embaralhado.
 */
export function shuffle<T>(array: MaybeRefOrGetter<T[]>): T[] {
    const data = [...toValue(array)];
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
}
