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

export const vueUse = vueUseCore;

// EXPORTAR TODOS OS HELPERS DENTRO DE UM OBJETO PARA SIMULAR A BIBLIOTECA LODASH...
export const _ = () => {
    return {
        Browser,
        Dates,
        Iterables,
        Math,
        Objects,
        Strings,
        Types,
        Validations,
        Electrical,
        Format
    };
};