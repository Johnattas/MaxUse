export * from './documents';
export * from './isEmail';
export * from './cepIsValid';

import { isCpf, isCnpj, isCpfCnpj } from './documents';
import { isEmail } from './isEmail';
import { cepIsValid } from './cepIsValid';

export const validate = {
    isCpf,
    cpf: isCpf,
    isCnpj,
    cnpj: isCnpj,
    isCpfCnpj,
    cpfcnpj: isCpfCnpj,
    isEmail,
    email: isEmail,
    cepIsValid,
    cep: cepIsValid
};

export const isValid = validate;

