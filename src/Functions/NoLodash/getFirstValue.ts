import { type MaybeRef, unref } from 'vue';

type TypeValues = MaybeRef<string | number | null | undefined | any[] | Record<string, any>>;

export function getFirstValue(values: TypeValues, return_zero: boolean = false): any {
    const unref_val = unref(values);

    if (unref_val === null || unref_val === undefined) return null;

    const items = Array.isArray(unref_val) ? unref_val : typeof unref_val === 'object' ? Object.values(unref_val) : [unref_val];

    for (const item of items) {
        const data = unref(item);
        if (isNumeric(data) && Number(data) === 0) {
            if (return_zero) return 0;
            continue;
        }
        if (hasContent(data, return_zero)) return data;

    }

    return null;
}

export function getValue(values: TypeValues, return_zero: boolean = false): any {
    return getFirstValue(values, return_zero);
}
