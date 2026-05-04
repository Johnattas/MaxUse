import * as vueUseCore from './Helpers/VueUse';

import * as Browser from './Helpers/Browser';
import * as Dates from './Helpers/Dates';
import * as Iterables from './Helpers/Iterables';
import * as Math from './Helpers/Math';
import * as Objects from './Helpers/Objects';
import * as Strings from './Helpers/Strings';
import * as Types from './Helpers/Types';
import * as Validations from './Helpers/Validations';
import * as Electrical from './Helpers/Electrical';
import * as Format from './Helpers/Format';

// Exporta os módulos principais
export * from './Composables';
export * from './Routes';

// Exporta as categorias de Helpers de forma modular
export * from './Helpers/Browser';
export * from './Helpers/Dates';
export * from './Helpers/Iterables';
export * from './Helpers/Math';
export * from './Helpers/Objects';
export * from './Helpers/Strings';
export * from './Helpers/Types';
export * from './Helpers/Validations';
export * from './Helpers/Electrical';
export * from './Helpers/Format';

export * from './Helpers/VueUse';

export { maxUseItems } from './Helpers/maxUseItems';

/**
 * Exporta um objeto contendo todos os itens do VueUse sem exceção.
 */
export const vueUse = vueUseCore.vueUse;

/**
 * Helpers Próprios da MaxUse.
 */
const ownHelpers = {
    ...Browser,
    ...Dates,
    ...Iterables,
    ...Math,
    ...Objects,
    ...Strings,
    ...Types,
    ...Validations,
    ...Electrical,
    ...Format
};

/**
 * Helpers do VueUse (filtrados para evitar duplicatas com os próprios).
 */
const filteredVueUse = {} as Omit<typeof vueUseCore, keyof typeof ownHelpers | 'vueUse'>;
const vueUseKeys = Object.keys(vueUseCore).filter((key) => key !== 'vueUse');

for (const key of vueUseKeys) if (!(key in ownHelpers)) (filteredVueUse as Record<string, any>)[key] = (vueUseCore as Record<string, any>)[key];


/**
 * Objeto centralizado de helpers, semelhante ao Lodash (_).
 * Contém os helpers próprios e os do VueUse (sem duplicatas).
 */
export const _ = {
    ...ownHelpers,
    ...filteredVueUse
};