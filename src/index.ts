import * as iterables from './Helpers/iterables';
import * as validations from './Helpers/validations';
import * as format from './Helpers/format';
import * as str from './Helpers/str';
import * as electrical from './Helpers/electrical';
import * as composables from './Composables';
import * as vueUseCore from './Helpers/vueUse';

// Exporta as funções sep   aradas para quem quiser importar isoladamente
export * from './Composables';

export * from './Helpers/iterables';
export * from './Helpers/validations';
export * from './Helpers/format';
export * from './Helpers/str';
export * from './Helpers/electrical';
export * from './Helpers/vueUse';

export { maxUseItems } from './Helpers/maxUseItems';

// Exporta um objeto unificado
export const maxUse = {
    ...iterables,
    ...validations,
    ...format,
    ...str,
    ...electrical,
    ...composables,
    vueuse: vueUseCore
};

export const vueUse = vueUseCore;