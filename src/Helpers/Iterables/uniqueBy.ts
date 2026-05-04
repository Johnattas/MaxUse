import { unref } from 'vue';

/**
 * Retorna itens únicos de um array de objetos com base em uma propriedade específica.
 * Útil para limpar listas de dados vindas de múltiplas fontes ou após junções de arrays.
 *
 * @param array O array a ser processado (pode ser um Ref).
 * @param key A chave usada para identificar a unicidade ou uma função seletora.
 * @returns Retorna o novo array de valores únicos.
 */
export function uniqueBy<T>(array: T[] | any, key: string | ((item: T) => any)): T[] {
    const data = unref(array);
    if (!Array.isArray(data)) return [];

    const seen = new Set();
    return data.filter((item) => {
        const k = typeof key === 'function' ? key(item) : (item as any)[key];

        if (seen.has(k)) return false;

        seen.add(k);
        return true;
    });
}
