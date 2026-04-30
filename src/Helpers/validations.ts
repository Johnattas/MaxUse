import { validateBr } from 'js-brasil';
import { type MaybeRefOrGetter, Ref, toValue } from 'vue';

type RefString = MaybeRefOrGetter<string | number | null | undefined>;

export function hasContent(value: RefString, if_zero: boolean = false): boolean {
    const data: any = toValue(value);

    if (!data || String(data) === 'null' || String(data) === 'NULL' || String(data) === 'undefined' || String(data) === 'UNDEFINED') return false;
    if (typeof data === 'number') return data === 0 ? if_zero : true;
    if (typeof data === 'string') return data.trim().length > 0;
    if (Array.isArray(data)) return data.length > 0;
    if (String(data) !== '[object Object]') return String(data).length > 0;
    if (data instanceof Map || data instanceof Set) return data.size > 0;
    if (typeof data === 'object') return Object.keys(data).length > 0;
    return data.length > 0;
}

export function isBlank(value: RefString, if_zero: boolean = false): boolean {
    return !hasContent(value, if_zero);
}

export function isNumber(value: RefString): boolean {
    const data = toValue(value);
    if (isBlank(data, true)) return false;
    if (String(data).trim() === '') return false;
    return !Number.isNaN(Number(data));
}

export const isNumeric = isNumber;
export const numeric = isNumber;

export function isCpf(value: RefString) {
    const data = toValue(value);
    return validateBr.cpf(data);
}

export function isCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cnpj(data);
}

export function isCpfCnpj(value: RefString) {
    const data = toValue(value);
    return validateBr.cpfcnpj(data);
}

export function isDate(valor: RefString): boolean {
    const data: any = toValue(valor);
    if (data instanceof Date) return !isNaN(data.getTime());
    if (typeof data === 'string' || typeof data === 'number') {
        const parsed = new Date(data);
        return !isNaN(parsed.getTime());
    }
    return false;
}

type TDate = string | Date | null | undefined;
type IDateInterval = { start: Date | string; end?: Date | string | null };

export function inDateInterval(value: MaybeRefOrGetter<TDate>, interval: MaybeRefOrGetter<IDateInterval>): boolean {
    const targetDate: any = toValue(value);
    const rawInterval: any = toValue(interval);

    if (!targetDate || !rawInterval) return true;

    const target = new Date(targetDate).getTime();
    const start = new Date(rawInterval.start).getTime();
    const end = rawInterval.end ? new Date(rawInterval.end).getTime() : false;

    return target >= start && (!end || target <= end);
}

export function isInDateInterval(value: MaybeRefOrGetter<TDate>, interval: MaybeRefOrGetter<IDateInterval>): boolean {
    return inDateInterval(value, interval);
}

type TDateArray = Date[] | string[];
type Operator = 'and' | 'or';

export function isSameDay(dates: MaybeRefOrGetter<TDateArray>, operator: Operator = 'or'): boolean {
    const values = toValue(dates);

    if (!values || values.length <= 1) return true;

    const days = values.map((date) => {
        const d = new Date(date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    });

    if (operator === 'and') return days.every((day) => day === days[0]);

    const uniqueDays = new Set(days);
    return uniqueDays.size < days.length;

}

type TPassed = string | Date | null | undefined;
export function hasPassedHours(dateValue: MaybeRefOrGetter<TPassed>, hours: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = hours * 60 * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}

export function hasPassedMinutes(dateValue: MaybeRefOrGetter<TPassed>, minutes: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = minutes * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}

export function hasPassedDays(dateValue: MaybeRefOrGetter<TPassed>, days: number = 1): boolean {
    const rawValue: any = toValue(dateValue);

    if (!rawValue) return true;

    const date = new Date(rawValue);
    if (isNaN(date.getTime())) return true;

    const timeInMs: number = days * 24 * 60 * 60 * 1000;
    const diferencaEmMs: number = Date.now() - date.getTime();
    return diferencaEmMs > timeInMs;
}


export function canIterate<T>(obj: any): obj is Iterable<T> {
    return typeof obj?.[Symbol.iterator] === 'function';
}

export const validate = {
    number: isNumber,
    isNumber: isNumber,
    hasContent,
    isBlank,
    isCpf,
    cpf: isCpf,
    isCnpj,
    cnpj: isCnpj,
    isCpfCnpj,
    cpfcnpj: isCpfCnpj,
    isDate,
    date: isDate,
    isIterable: canIterate,
    inDateInterval,
    isInDateInterval,
    canIterate,
    isSameDay,
    sameDay: isSameDay,
    hasPassedHours,
    passedHours: hasPassedHours,
    hasPassedMinutes,
    passedMinutes: hasPassedMinutes,
    hasPassedDays,
    passedDays: hasPassedDays
};

export const isValid = validate;


