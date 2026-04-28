export function isSize (string: string) {
    return ['px', 'rem', 'em'].some((unidade: string) => string.includes(unidade))
}
