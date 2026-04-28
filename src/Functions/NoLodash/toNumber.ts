import { type Ref, unref } from 'vue';

export function toNumber(value: any | Ref, decimals: number | null = null): number {
    const data = Number(unref(value));
    const number = isNaN(data) ? 0 : data;
    if (decimals !== null) {
        const factor = Math.pow(10, decimals);
        return Math.round(number * factor) / factor;
    }
    return number;
}
