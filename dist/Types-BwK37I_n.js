import { t as isBlank } from "./isBlank-ByzYVLTg.js";
import { toValue } from "vue";
//#region src/Helpers/Types/isNumber.ts
/**
* Verifica se um valor é um número válido.
* 
* @param value O valor a ser verificado.
* @returns Retorna true se for um número.
*/
function isNumber(value) {
	const data = toValue(value);
	if (isBlank(data, true)) return false;
	if (String(data).trim() === "") return false;
	return !Number.isNaN(Number(data));
}
var isNumeric = isNumber;
var numeric = isNumber;
//#endregion
//#region src/Helpers/Types/canIterate.ts
/**
* Verifica se um objeto é iterável.
* 
* @param obj O objeto a ser verificado.
* @returns Retorna true se for iterável.
*/
function canIterate(obj) {
	return typeof obj?.[Symbol.iterator] === "function";
}
var isIterable = canIterate;
//#endregion
export { numeric as a, isNumeric as i, isIterable as n, isNumber as r, canIterate as t };

//# sourceMappingURL=Types-BwK37I_n.js.map