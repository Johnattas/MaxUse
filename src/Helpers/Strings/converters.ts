import { toValue, type MaybeRefOrGetter } from 'vue';
import { isBlank } from '../Types/isBlank';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

export function toSearchableString(value: RefString): string {
    const data = toValue(value);
    if (!data || isBlank(data)) return '';

    return String(data).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

export const normalizeToSearch = toSearchableString;

export function toNumber(value: RefString, decimals: number | null = null): number {
    const data = toValue(value);
    if (!data || isBlank(data) || isNaN(Number(data))) return 0;

    const number = Number(data);

    if (decimals !== null) {
        const factor = Math.pow(10, decimals);
        return Math.round(number * factor) / factor;
    }
    return number;
}
