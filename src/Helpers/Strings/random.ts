import { ulid as ulidLib } from 'ulid';

function getUlid () {
    return ulidLib().toLowerCase();
}

type Typecode = `${string}${'lower' | 'ulid' | 'upper'}${string}`;

/**
 * Gera uma string aleatória.
 *
 * @param arg1 Comprimento ou código de tipo.
 * @param arg2 Comprimento ou código de tipo.
 * @returns Retorna a string gerada.
 */
export function Random (arg1: number | Typecode = 20, arg2: number | Typecode = 'letter lower') {

    if (String(arg1).includes('ulid') || String(arg2).includes('ulid')) return getUlid();

    const length = typeof arg1 === 'number' ? arg1 : (typeof arg2 === 'number' ? arg2 : 20);
    const type_code = String(typeof arg1 === 'string' ? arg1 : String(arg2)).toLowerCase();

    let chars = '';

    if (type_code.includes('lower') || type_code.includes('letter')) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (type_code.includes('upper')) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type_code.includes('number') && !type_code.includes('nonumber')) chars += '0123456789';

    // Fallback se nada foi especificado ou se resultou em vazio
    if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Se for solicitado APENAS número
    if (type_code.includes('number') && !type_code.includes('lower') && !type_code.includes('upper') && !type_code.includes('letter')) chars = '0123456789';

    let result = '';
    const charactersLength = chars.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += chars.charAt(randomIndex);
    }

    return result;
}

export function ulid () {
    return getUlid();
}

/**
 * Gera um número aleatório em um intervalo.
 *
 * @param min Valor mínimo.
 * @param max Valor máximo.
 * @returns Retorna o número gerado.
 */
export function intervalRandom (min: number = 0, max: number = 1000) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
