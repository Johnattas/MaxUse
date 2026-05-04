import { unref } from "vue";
//#region src/Helpers/Types/isArray.ts
/**
* Verifica se o valor é classificado como um Array.
* Semelhante ao _.isArray do Lodash.
*
* @param value O valor a ser verificado.
* @returns Retorna true se o valor for um array, caso contrário false.
*/
function isArray(value) {
	return Array.isArray(unref(value));
}
//#endregion
//#region src/Helpers/Types/isObject.ts
/**
* Verifica se o valor é classificado como um objeto (objetos, arrays, funções, regexes, etc).
* Semelhante ao _.isObject do Lodash.
*
* @param value O valor a ser verificado.
* @returns Retorna true se o valor for um objeto, caso contrário false.
*/
function isObject(value) {
	const data = unref(value);
	const type = typeof data;
	return data !== null && (type === "object" || type === "function");
}
//#endregion
export { isArray as n, isObject as t };

//# sourceMappingURL=isObject-t2kgsScf.js.map