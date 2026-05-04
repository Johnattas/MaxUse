export * from './currency';
export * from './bytes';
export { formatCep, formatCpf, formatCnpj, formatCpfCnpj, formatPhone, maskSensitive } from '../Strings/masks';

import { formatCurrency } from './currency';
import { formatBytes } from './bytes';
import { formatCep, formatCpf, formatCnpj, formatCpfCnpj, formatPhone, maskSensitive } from '../Strings/masks';

export const format = {
    currency: formatCurrency,
    bytes: formatBytes,
    cep: formatCep,
    cpf: formatCpf,
    cnpj: formatCnpj,
    cpfCnpj: formatCpfCnpj,
    phone: formatPhone,
    sensitive: maskSensitive
};
