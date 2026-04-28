type T = string | number | null | undefined;
export function onlyNumbers(value: MaybeRefOrGetter<T>): string {
    value = toValue(value);
    if (isBlank(value)) return '';
    return String(value).replace(/\D/g, '');
}
