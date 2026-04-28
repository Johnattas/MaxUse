import { toValue, MaybeRef } from 'vue';

type T = string | Date | null | undefined;
export function hasPassedHours(dateValue: MaybeRef<T>, hours: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = hours * 60 * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}

export function hasPassedMinutes(dateValue: MaybeRef<T>, minutes: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = minutes * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}
