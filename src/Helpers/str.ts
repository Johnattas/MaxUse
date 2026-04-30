import { ulid as ulidLib } from 'ulid';
import { Format } from './format';

function getUlid () {
    return ulidLib().toLowerCase();
}

type Typecode = `${string}${'lower' | 'ulid' | 'upper'}${string}`;

export function Random (arg1: number | Typecode = 20, arg2: number | Typecode = 'letter lower') {

    if (String(arg1).includes('ulid') || String(arg2).includes('ulid')) return getUlid();

    const length = typeof arg1 === 'number' ? arg1 : arg2;

    const params = {
        length : typeof length === 'number' ? length : 20,
        type: typeof arg2 !== 'number' ? arg2 : 'letter lower',
        chars: 'abcdefghijklmnopqrstuvwxyz'
    };

    const type_code = Format.toSearch(typeof arg1 === 'string' ? arg1 : String(arg2)) ;
    if (type_code.includes('upper')) params.chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type_code.includes('number') && ! type_code.includes('nonumber')) params.chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type_code.includes('number') && ! type_code.includes('lower') && ! type_code.includes('upper')) params.chars = '0123456789';

    let result = '';
    const charactersLength = params.chars.length;

    for (let i = 0; i < params.length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += params.chars.charAt(randomIndex);
    }

    return result;
}

export function ulid () {
    return getUlid();
}

export function intervalRandom (min: number = 0, max: number = 1000) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // A fórmula para gerar o número aleatório no intervalo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Str ={
    Random,
    code: Random,
    ulid: getUlid,
    intervalRandom,
    interval: intervalRandom,
    numberInterval: intervalRandom,
    numberRandom: intervalRandom
};