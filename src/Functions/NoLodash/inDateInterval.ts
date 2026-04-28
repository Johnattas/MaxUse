import { toValue, MaybeRef } from 'vue';

type T = string | Date | null | undefined;
type I = { start: Date | string; end?: Date | string | null };

export function inDateInterval(dateValue: MaybeRef<T>, interval: MaybeRef<I>): boolean {
    const targetDate: any = toValue(dateValue);
    const rawInterval: any = toValue(interval);

    if (!targetDate || !rawInterval) return true;

    const target = new Date(targetDate).getTime();
    const start = new Date(rawInterval.start).getTime();
    const end = rawInterval.end ? new Date(rawInterval.end).getTime() : false;

    return target >= start && (!end || target <= end);
}

export function isInDateInterval(dateValue: MaybeRef<T>, interval: MaybeRef<I>): boolean {
    return inDateInterval(dateValue, interval);
}
