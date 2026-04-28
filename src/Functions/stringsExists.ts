export function stringsExists(string: string, values: any, options: any = null): boolean {
    const caseSensitive = options?.caseSensitive ?? false;
    const any = options?.any ?? options?.some ?? options?.one ?? options?.contains ?? true;
    const all = options?.all ?? options?.every ?? false;

    if (typeof values === 'string') {
        values = [values];
    }

    if (values instanceof Array) {
        if (!caseSensitive) {
            string = normalizeToSearch(string);
            values = values.map((palavra) => palavra.toLowerCase());
        }

        if (all) {
            return values.every((item: any) => string.includes(item));
        }
        if (any) {
            return values.some((item: any) => string.includes(item));
        }
    }
    return false;
}
