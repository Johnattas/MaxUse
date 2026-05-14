import * as vueUseCore from '@vueuse/core';
import * as lodash from 'lodash-es';
export * from './Composables';
export * from './Routes';
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
export { maxUseItems, maxUseAutoImport } from './Helpers/maxUseItems';
/**
 * Exporta um objeto contendo todos os itens do VueUse sem exceção.
 */
export declare const vueUse: typeof vueUseCore;
/**
 * Objeto centralizado de helpers, semelhante ao Lodash (_).
 * Contém os helpers próprios, os do VueUse e os do Lodash (sem duplicatas).
 */
export declare const _: typeof lodash;
//# sourceMappingURL=index.d.ts.map