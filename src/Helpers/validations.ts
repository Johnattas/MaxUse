import { validateBr } from 'js-brasil';
import { type MaybeRefOrGetter, toValue } from 'vue';

import { 
    isDate, inDateInterval, isInDateInterval, isSameDay, 
    hasPassedHours, hasPassedMinutes, hasPassedDays 
} from './Dates';

import { isNumber, isNumeric, numeric, isBlank, hasContent, canIterate, isIterable } from './Types';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

export { 
    hasContent, isBlank, isNumber, isNumeric, numeric, 
    isDate, inDateInterval, isInDateInterval, isSameDay, 
    hasPassedHours, hasPassedMinutes, hasPassedDays, 
    canIterate
};

export function isCpf(value: RefString) {
    const data = toValue(value);
    return validateBr.cpf(data);
}

export function isCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cnpj(data);
}

export function isCpfCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cpfcnpj(data);
}

export const validate = {
    number: isNumber,
    isNumber: isNumber,
    hasContent,
    isBlank,
    isCpf,
    cpf: isCpf,
    isCnpj,
    cnpj: isCnpj,
    isCpfCnpj,
    cpfcnpj: isCpfCnpj,
    isDate,
    date: isDate,
    isIterable: canIterate,
    inDateInterval,
    isInDateInterval,
    canIterate,
    isSameDay,
    sameDay: isSameDay,
    hasPassedHours,
    passedHours: hasPassedHours,
    hasPassedMinutes,
    passedMinutes: hasPassedMinutes,
    hasPassedDays,
    passedDays: hasPassedDays
};

export const isValid = validate;
