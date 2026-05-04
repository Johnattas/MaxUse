import { toValue, type MaybeRefOrGetter } from 'vue';
import { isBlank } from '../Types/isBlank';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

export function onlyLetters(value: RefString, space: boolean = false): string {
    const data = toValue(value);
    if (isBlank(data)) return '';

    return space ? String(data).replace(/[^a-zA-ZÀ-ÿ\s]/g, '') : String(data).replace(/[^a-zA-ZÀ-ÿ]/g, '');
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
    return space ? String(data).replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, '') : String(data).replace(/[^a-zA-ZÀ-ÿ0-9]/g, '');
}

export function removeSpaces(value: RefString): string {
    const data = toValue(value);
    if (isBlank(data)) return '';
    return String(data).replace(/\s+/g, '');
}
