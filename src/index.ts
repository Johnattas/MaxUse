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

// VueUse é exportado separadamente para evitar colisões no namespace global (get, set, etc.)
export * as vueUse from './Helpers/VueUse';


// Exporta itens específicos
export { maxUseItems } from './Helpers/maxUseItems';