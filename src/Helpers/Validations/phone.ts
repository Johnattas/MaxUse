import * as PhoneLib from 'libphonenumber-js';
import { type MaybeRefOrGetter, toValue } from 'vue';


export function phone(value: MaybeRefOrGetter<string | number | null | undefined>): boolean {
    const data = toValue(value);
    if (!data) return false;

    return PhoneLib.isValidPhoneNumber(String(data));
}