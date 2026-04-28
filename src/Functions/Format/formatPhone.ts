
type T = string | number | null | undefined;
export function formatPhone (phone_number: MaybeRefOrGetter<T>): string {
    phone_number = toValue(phone_number);

    if (!phone_number || isBlank(phone_number)) return '';

    phone_number = String(phone_number).replace(/\D/g, '');

    if (phone_number.startsWith('0800')) return phone_number.replace(/55(\d{4})(\d{4})/, '$1-$2');
    if (phone_number.length === 12) return phone_number.replace(/55(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    if (phone_number.length === 13) return phone_number.replace(/55(\d{2})9(\d{4})(\d{4})/, '($1) 9 $2-$3');

    return String(phone_number);
}
