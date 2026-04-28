
type T = string | null | undefined;

export function onlyLetters (value: MaybeRefOrGetter<T>): string {
    value = toValue(value);
    if (isBlank(value)) return ''
    return value.replace(/[^a-zA-Z]/g, '');
}
