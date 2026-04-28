
type T = string | number | null | undefined;
export function onlySymbols(value: MaybeRefOrGetter<T>): string {
    value = toValue(value);
    if (isBlank(value)) return '';
    return String(value).replace(/[a-zA-Z0-9\s]/g, '');
}
