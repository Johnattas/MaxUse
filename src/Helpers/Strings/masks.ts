import { maskBr } from 'js-brasil';
import { toValue, type MaybeRefOrGetter } from 'vue';
import { isBlank } from '../Types/isBlank';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

export function formatCep(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';

    const cep = String(data).replace(/\D/g, '');
    if (cep.length === 8) return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    return String(data);
}

export function formatCpf(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return maskBr.cpf(data);
}

export function formatCnpj(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return maskBr.cnpj(data);
}

export function formatCpfCnpj(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return maskBr.cpfcnpj(data);
}

export function formatPhone(phone_number: RefString): string {
    const data = toValue(phone_number);

    if (!data || isBlank(data)) return '';

    const only_numbers = String(data).replace(/\D/g, '');

    if (only_numbers.startsWith('0800')) return only_numbers.replace(/^0800(\d{3})(\d{4})$/, '0800 $1 $2');

    if (only_numbers.length === 10) return only_numbers.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    if (only_numbers.length === 11) return only_numbers.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    if (only_numbers.length === 12) return only_numbers.replace(/^55(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    if (only_numbers.length === 13) return only_numbers.replace(/^55(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');

    return String(data);
}
