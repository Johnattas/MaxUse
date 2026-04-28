export function isDate (valor: any): boolean {
    return valor instanceof Date && !isNaN(valor.getTime());
}
