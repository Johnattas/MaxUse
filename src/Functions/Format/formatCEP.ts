import { toValue, MaybeRefOrGetter } from 'vue';

type T = string | number | null;
export function formatCEP(value: MaybeRefOrGetter<T>): string {
    value = toValue(value);
    if (!value) return '';

    value = String(value);
    const cep = value.replace(/\D/g, '');
    if (cep.length === 8) return cep.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1.$2-$3');
    return value;
}
