import { validateBr } from 'js-brasil';
import { type MaybeRefOrGetter, toValue } from 'vue';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

/**
 * Valida se uma string é um CPF válido.
 */
export function isCpf(value: RefString) {
    const data = toValue(value);
    return validateBr.cpf(data);
}

/**
 * Valida se uma string é um CNPJ válido.
 */
export function isCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cnpj(data);
}

/**
 * Valida se uma string é um CPF ou CNPJ válido.
 */
export function isCpfCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cpfcnpj(data);
}
