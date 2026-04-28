import { type Ref, unref } from 'vue';
import { hasContent } from './hasContent';

type T = Record<string, any> | string | number | null | undefined;
export function isBlank(value: T | Ref<T>, if_zero: boolean = false): boolean {
    const data = unref(value);
    return !hasContent(data, if_zero);
}
