import * as PhoneLib from 'libphonenumber-js';
import { type MaybeRefOrGetter, toValue } from 'vue';


export function phoneIsValid(value: MaybeRefOrGetter<string | number | null | undefined>): boolean {
    const data = toValue(value);
    if (!data) return false;

    return PhoneLib.isValidPhoneNumber(String(data));
}

export const phone: typeof PhoneLib & { isValid: typeof phoneIsValid } = {
    ...PhoneLib,
    isValid: phoneIsValid
};