import { maskBr } from 'js-brasil';
import { toValue, MaybeRefOrGetter } from 'vue';
import { isBlank } from './validations';

type RefString = MaybeRefOrGetter<string | number | null>;

export function formatCep(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';

    const cep = String(data).replace(/\D/g, '');
    if (cep.length === 8) return cep.replace(/^(\d{2})(\d{3})(\d{3})$/, '$1$2-$3');
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
    if (only_numbers.length === 12) return only_numbers.replace(/55(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    if (only_numbers.length === 13) return only_numbers.replace(/55(\d{2})9(\d{4})(\d{4})/, '($1) 9 $2-$3');

    return String(data);
}

export function onlyLetters(value: RefString, space: boolean = false): string {
    const data = toValue(value);
    if (isBlank(data)) return '';

    return space ? String(data).replace(/[^a-zA-Z\s]/g, '') : String(data).replace(/[^a-zA-Z]/g, '');
}

export function onlyNumbers(value: RefString, space: boolean = false): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return space ? String(data).replace(/[^0-9\s]/g, '') : String(data).replace(/[^0-9]/g, '');
}

export function onlySymbols(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return String(data).replace(/[^\W_]/g, '');
}

export function onlyLettersAndNumbers(value: RefString, space: boolean = false): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return space ? String(data).replace(/[^a-zA-Z0-9\s]/g, '') : String(data).replace(/[^a-zA-Z0-9]/g, '');
}

export function removeSpaces(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return String(data).replace(/\s+/g, '');
}

export function toSearchableString(value: RefString): string {
    const data = toValue(value);
    if (!data || isBlank(data)) return '';

    return removeSpaces(data).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '').toLowerCase();
}

export const normalizeToSearch = toSearchableString;

export function snakeCase(value: RefString): string {
    const data = toValue(value);
    if (!data || isBlank(data)) return '';

    const stringData = String(data);
    const words = stringData.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    return words ? words.map((word: string) => word.toLowerCase()).join('_') : '';
}

export function kebabCase(value: RefString): string {
    const data = toValue(value);
    if (!data || isBlank(data)) return '';

    const stringData = String(data);
    const words = stringData.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    return words ? words.map((word: string) => word.toLowerCase()).join('-') : '';
}

export function camelCase(value: RefString): string {
    const data = toValue(value);
    if (!data || isBlank(data)) return '';

    const stringData = String(data);
    const words = stringData.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    return words? words.map((word: string, index: number) => {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(''): '';
}

export function toNumber(value: RefString, decimals: number | null = null): number {
    const data = toValue(value);
    if (!data || isBlank(data) || isNaN(Number(data))) return 0;

    const number = Number(data);

    if (decimals !== null) {
        const factor = Math.pow(10, decimals);
        return Math.round(number * factor) / factor;
    }
    return number;
}

export const Convert = {
    toNumber,
    number: toNumber,
    toSearchableString
};

export const Format ={
    cep: formatCep,
    cpf: formatCpf,
    cnpj: formatCnpj,
    cpfCnpj: formatCpfCnpj,
    formatPhone,
    phone: formatPhone,
    onlyLetters,
    onlyNumbers,
    onlyLettersAndNumbers,
    lettersAndNumbers: onlyLettersAndNumbers,
    numbersAndLetters: onlyLettersAndNumbers,
    toSearch: toSearchableString,
    search: toSearchableString,
    searchable: toSearchableString,
    noSpaces: removeSpaces,
    removeSpaces,
    normalizeToSearch,
    symbols: onlySymbols,
    onlySymbols,
    snakeCase,
    snake: snakeCase,
    snake_case: snakeCase,
    kebabCase,
    camelCase,
    camel: camelCase,
    camel_case: camelCase,
    kebab: kebabCase,
    kebab_case: kebabCase,
    toNumber: toNumber
};

export const StrFilter ={
    onlyLetters,
    onlyNumbers,
    onlyLettersAndNumbers,
    lettersAndNumbers: onlyLettersAndNumbers,
    numbersAndLetters: onlyLettersAndNumbers,
    onlySymbols,
    symbols: onlySymbols
};