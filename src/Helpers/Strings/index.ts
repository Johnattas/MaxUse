export * from './random';
export * from './masks';
export * from './filters';
export * from './cases';
export * from './converters';
export * from './manipulations';

import { Random, ulid, intervalRandom } from './random';
import { truncate, slugify, stripHtml, initials, readingTime } from './manipulations';
import { onlyLetters, onlyNumbers, onlySymbols, onlyLettersAndNumbers, removeSpaces } from './filters';
import { snakeCase, kebabCase, camelCase, capitalize } from './cases';

export { stripHtml as noHtml };

export const Str = {
    Random,
    code: Random,
    ulid,
    intervalRandom,
    interval: intervalRandom,
    truncate,
    slugify,
    capitalize,
    noHtml: stripHtml,
    initials,
    readingTime
};

export const StrFilter = {
    onlyLetters,
    onlyNumbers,
    onlyLettersAndNumbers,
    onlySymbols,
    removeSpaces
};

export const StrCase = {
    snakeCase,
    kebabCase,
    camelCase,
    capitalize
};

