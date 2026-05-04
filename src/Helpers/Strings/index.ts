export * from './random';
export * from './masks';
export * from './filters';
export * from './cases';
export * from './converters';

import { Random, ulid, intervalRandom } from './random';
import { formatCep, formatCpf, formatCnpj, formatCpfCnpj, formatPhone } from './masks';
import { onlyLetters, onlyNumbers, onlySymbols, onlyLettersAndNumbers, removeSpaces } from './filters';
import { snakeCase, kebabCase, camelCase } from './cases';
import { toSearchableString, normalizeToSearch, toNumber } from './converters';

export const Str = {
    Random,
    code: Random,
    ulid,
    intervalRandom,
    interval: intervalRandom
};

export const Convert = {
    toNumber,
    toSearchableString,
    normalizeToSearch
};

export const Format = {
    // Máscaras
    cep: formatCep,
    cpf: formatCpf,
    cnpj: formatCnpj,
    cpfCnpj: formatCpfCnpj,
    phone: formatPhone,

    // Filtros
    onlyLetters,
    onlyNumbers,
    onlySymbols,
    onlyLettersAndNumbers,
    removeSpaces,
    noSpaces: removeSpaces,

    // Casos (Casing)
    snakeCase,
    kebabCase,
    camelCase,

    // Conversores
    searchable: toSearchableString,
    normalizeToSearch,
    toNumber
};

export const StrFilter = {
    onlyLetters,
    onlyNumbers,
    onlyLettersAndNumbers,
    onlySymbols,
    removeSpaces
};
