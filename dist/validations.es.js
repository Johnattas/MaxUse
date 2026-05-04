import { t as require_dist } from "./dist-CMVNn_SJ.js";
import { toValue } from "vue";
//#region src/Helpers/Validations/documents.ts
var import_dist = require_dist();
/**
* Valida se uma string é um CPF válido.
*/
function isCpf(value) {
	const data = toValue(value);
	return import_dist.validateBr.cpf(data);
}
/**
* Valida se uma string é um CNPJ válido.
*/
function isCnpj(value) {
	const data = toValue(value);
	return import_dist.validateBr.cnpj(data);
}
/**
* Valida se uma string é um CPF ou CNPJ válido.
*/
function isCpfCnpj(value) {
	const data = toValue(value);
	return import_dist.validateBr.cpfcnpj(data);
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
//#region src/Helpers/Validations/index.ts
var validate = {
	isCpf,
	cpf: isCpf,
	isCnpj,
	cnpj: isCnpj,
	isCpfCnpj,
	cpfcnpj: isCpfCnpj,
	isEmail,
	email: isEmail
};
var isValid = validate;
//#endregion
export { isCnpj, isCpf, isCpfCnpj, isEmail, isValid, validate };

//# sourceMappingURL=validations.es.js.map