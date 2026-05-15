import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { toValue } from "vue";
import { validateBr } from "js-brasil";
import * as PhoneLib from "libphonenumber-js";
//#region src/Helpers/Validations/documents.ts
/**
* Valida se uma string é um CPF válido.
*/
function isCpf(value) {
	const data = toValue(value);
	return validateBr.cpf(data);
}
/**
* Valida se uma string é um CNPJ válido.
*/
function isCnpj(value) {
	const data = toValue(value);
	return validateBr.cnpj(data);
}
/**
* Valida se uma string é um CPF ou CNPJ válido.
*/
function isCpfCnpj(value) {
	const data = toValue(value);
	return validateBr.cpfcnpj(data);
}
//#endregion
//#region src/Helpers/Validations/isEmail.ts
/**
* Valida se uma string é um endereço de e-mail com formato válido.
*
* @param value O valor a ser validado (string, Ref ou Getter).
* @returns True se for um e-mail válido, false caso contrário.
*/
function isEmail(value) {
	const data = toValue(value);
	if (!data || typeof data !== "string") return false;
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data);
}
//#endregion
//#region src/Helpers/Validations/cepIsValid.ts
/**
* Valida se uma string é um CEP válido.
*
* @param value O valor a ser validado (string, Ref ou Getter).
* @returns True se for um CEP válido, false caso contrário.
*/
function cepIsValid(value) {
	const data = toValue(value);
	return validateBr.cep(data);
}
//#endregion
//#region src/Helpers/Validations/phone.ts
function phone(value) {
	const data = toValue(value);
	if (!data) return false;
	return PhoneLib.isValidPhoneNumber(String(data));
}
//#endregion
//#region src/Helpers/Validations/index.ts
var Validations_exports = /* @__PURE__ */ __exportAll({
	cepIsValid: () => cepIsValid,
	isCnpj: () => isCnpj,
	isCpf: () => isCpf,
	isCpfCnpj: () => isCpfCnpj,
	isEmail: () => isEmail,
	isValid: () => isValid,
	validate: () => validate
});
var validate = {
	isCpf,
	cpf: isCpf,
	isCnpj,
	cnpj: isCnpj,
	isCpfCnpj,
	cpfcnpj: isCpfCnpj,
	isEmail,
	email: isEmail,
	cepIsValid,
	cep: cepIsValid,
	phone
};
var isValid = validate;
//#endregion
export { isEmail as a, isCpfCnpj as c, cepIsValid as i, isValid as n, isCnpj as o, validate as r, isCpf as s, Validations_exports as t };

//# sourceMappingURL=Validations-DG8315cQ.js.map