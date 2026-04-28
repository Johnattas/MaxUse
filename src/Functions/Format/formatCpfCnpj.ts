
type T = string | number | null | undefined;
export function formatCpfCnpj (value: T | MaybeRefOrGetter<T>): string {
    value = unref(value);
    if (isBlank(value)) return '';

    const onlyNumbers = String(value).replace(/\D/g, '');
    if (onlyNumbers.length <= 11) return onlyNumbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');


    return onlyNumbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}
