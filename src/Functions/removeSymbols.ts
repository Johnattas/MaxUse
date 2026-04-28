export function removeSymbols (string: string) {
    if (!string) return '';

    return string.replace(/[^a-zA-Z0-9\s]/g, '');
}
