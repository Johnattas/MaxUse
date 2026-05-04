export * from './documents';
export * from './isEmail';

import { isCpf, isCnpj, isCpfCnpj } from './documents';
import { isEmail } from './isEmail';

export const validate = {
    isCpf,
    cpf: isCpf,
    isCnpj,
    cnpj: isCnpj,
    isCpfCnpj,
    cpfcnpj: isCpfCnpj,
    isEmail,
    email: isEmail,
};

export const isValid = validate;

