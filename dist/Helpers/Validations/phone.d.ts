import { MaybeRefOrGetter } from 'vue';
import * as PhoneLib from 'libphonenumber-js';
export declare function phoneIsValid(value: MaybeRefOrGetter<string | number | null | undefined>): boolean;
export declare const phone: typeof PhoneLib & {
    isValid: typeof phoneIsValid;
};
//# sourceMappingURL=phone.d.ts.map