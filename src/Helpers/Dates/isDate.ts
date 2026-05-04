import { toValue, type MaybeRefOrGetter } from 'vue';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

/**
 * Verifica se um valor é uma data válida.
 *
 * @param valor O valor a ser verificado.
 * @returns Retorna true se for uma data válida.
 */
export function isDate(valor: RefString): boolean {
    const data: any = toValue(valor);
    if (data instanceof Date) return !isNaN(data.getTime());
    if (typeof data === 'string' || typeof data === 'number') {
        const parsed = new Date(data);
        return !isNaN(parsed.getTime());
    }
    return false;
}
