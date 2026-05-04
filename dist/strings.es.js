import { t as ulid$1 } from "./browser-B6fB4aHD.js";
import { t as isBlank } from "./isBlank-ByzYVLTg.js";
import { a as formatPhone, i as formatCpfCnpj, n as formatCnpj, o as maskSensitive, r as formatCpf, t as formatCep } from "./masks-C40U7cWu.js";
import { toValue } from "vue";
//#region src/Helpers/Strings/random.ts
function getUlid() {
	return ulid$1().toLowerCase();
}
/**
* Gera uma string aleatória.
*
* @param arg1 Comprimento ou código de tipo.
* @param arg2 Comprimento ou código de tipo.
* @returns Retorna a string gerada.
*/
function Random(arg1 = 20, arg2 = "letter lower") {
	if (String(arg1).includes("ulid") || String(arg2).includes("ulid")) return getUlid();
	const length = typeof arg1 === "number" ? arg1 : typeof arg2 === "number" ? arg2 : 20;
	const type_code = String(typeof arg1 === "string" ? arg1 : String(arg2)).toLowerCase();
	let chars = "";
	if (type_code.includes("lower") || type_code.includes("letter")) chars += "abcdefghijklmnopqrstuvwxyz";
	if (type_code.includes("upper")) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (type_code.includes("number") && !type_code.includes("nonumber")) chars += "0123456789";
	if (!chars) chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	if (type_code.includes("number") && !type_code.includes("lower") && !type_code.includes("upper") && !type_code.includes("letter")) chars = "0123456789";
	let result = "";
	const charactersLength = chars.length;
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charactersLength);
		result += chars.charAt(randomIndex);
	}
	return result;
}
function ulid() {
	return getUlid();
}
/**
* Gera um número aleatório em um intervalo.
*
* @param min Valor mínimo.
* @param max Valor máximo.
* @returns Retorna o número gerado.
*/
function intervalRandom(min = 0, max = 1e3) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//#endregion
//#region src/Helpers/Strings/filters.ts
function onlyLetters(value, space = false) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return space ? String(data).replace(/[^a-zA-ZÀ-ÿ\s]/g, "") : String(data).replace(/[^a-zA-ZÀ-ÿ]/g, "");
}
function onlyNumbers(value, space = false) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return space ? String(data).replace(/[^0-9\s]/g, "") : String(data).replace(/[^0-9]/g, "");
}
function onlySymbols(value) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return String(data).replace(/[^\W_]/g, "");
}
function onlyLettersAndNumbers(value, space = false) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return space ? String(data).replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, "") : String(data).replace(/[^a-zA-ZÀ-ÿ0-9]/g, "");
}
function removeSpaces(value) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return String(data).replace(/\s+/g, "");
}
//#endregion
//#region src/Helpers/Strings/cases.ts
function snakeCase(value) {
	const data = toValue(value);
	if (!data || isBlank(data)) return "";
	const words = String(data).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	return words ? words.map((word) => word.toLowerCase()).join("_") : "";
}
function kebabCase(value) {
	const data = toValue(value);
	if (!data || isBlank(data)) return "";
	const words = String(data).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	return words ? words.map((word) => word.toLowerCase()).join("-") : "";
}
function camelCase(value) {
	const data = toValue(value);
	if (!data || isBlank(data)) return "";
	const words = String(data).match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	return words ? words.map((word, index) => {
		if (index === 0) return word.toLowerCase();
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	}).join("") : "";
}
/**
* Garante que apenas a primeira letra da string seja maiúscula e o restante minúscula.
*
* @param value A string a ser formatada.
*/
function capitalize(value) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	const str = String(data);
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
//#endregion
//#region src/Helpers/Strings/converters.ts
function toSearchableString(value) {
	const data = toValue(value);
	if (!data || isBlank(data)) return "";
	return String(data).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
var normalizeToSearch = toSearchableString;
function toNumber(value, decimals = null) {
	const data = toValue(value);
	if (!data || isBlank(data) || isNaN(Number(data))) return 0;
	const number = Number(data);
	if (decimals !== null) {
		const factor = Math.pow(10, decimals);
		return Math.round(number * factor) / factor;
	}
	return number;
}
//#endregion
//#region src/Helpers/Strings/manipulations.ts
/**
* Encurta uma string até um limite de caracteres, adicionando reticências (...) ao final se necessário.
*
* @param value A string a ser encurtada.
* @param limit O limite máximo de caracteres.
* @param suffix O sufixo a ser adicionado (padrão: '...').
*/
function truncate(value, limit = 20, suffix = "...") {
	const data = toValue(value);
	if (isBlank(data)) return "";
	const str = String(data);
	if (str.length <= limit) return str;
	return str.slice(0, limit) + suffix;
}
/**
* Converte uma string para um formato amigável para URLs (slug).
* Remove acentos, caracteres especiais e substitui espaços por hífens.
*
* @param value A string a ser convertida.
*/
function slugify(value) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return String(data).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/[\s_]+/g, "-").replace(/-+/g, "-");
}
/**
* Remove todas as tags HTML de uma string, mantendo apenas o texto puro.
* Útil para exibir prévias de conteúdos vindos de editores de texto (Rich Text) em notificações ou listas simplificadas.
*
* @param value A string contendo HTML.
*/
function stripHtml(value) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	return String(data).replace(/<[^>]*>?/gm, "").replace(/&nbsp;/g, " ").trim();
}
/**
* Extrai as iniciais de um nome completo (ex: "João Victor Silva" ➔ "JS").
* Perfeito para gerar placeholders de avatares quando o usuário não tem uma foto de perfil.
*
* @param value O nome completo.
* @param limit O número máximo de iniciais (padrão: 2).
*/
function initials(value, limit = 2) {
	const data = toValue(value);
	if (isBlank(data)) return "";
	const names = String(data).trim().split(/\s+/);
	if (names.length === 0) return "";
	if (names.length === 1) return names[0].charAt(0).toUpperCase();
	return names.map((name) => name.charAt(0).toUpperCase()).filter((char) => char.length > 0).slice(0, limit).join("");
}
/**
* Calcula o tempo estimado de leitura de um texto.
* Ótimo para blogs ou áreas de documentação, dando ao usuário uma ideia de quanto tempo ele levará para ler um conteúdo.
*
* @param value O texto a ser analisado (pode conter HTML).
* @param wordsPerMinute A média de palavras lidas por minuto (padrão: 200).
*/
function readingTime(value, wordsPerMinute = 200) {
	const data = toValue(value);
	if (isBlank(data)) return "0 min de leitura";
	const words = stripHtml(data).trim().split(/\s+/).filter((word) => word.length > 0).length;
	if (words === 0) return "0 min de leitura";
	return `${Math.ceil(words / wordsPerMinute)} min de leitura`;
}
//#endregion
//#region src/Helpers/Strings/index.ts
var Str = {
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
var StrFilter = {
	onlyLetters,
	onlyNumbers,
	onlyLettersAndNumbers,
	onlySymbols,
	removeSpaces
};
var StrCase = {
	snakeCase,
	kebabCase,
	camelCase,
	capitalize
};
//#endregion
export { Random, Str, StrCase, StrFilter, camelCase, capitalize, formatCep, formatCnpj, formatCpf, formatCpfCnpj, formatPhone, initials, intervalRandom, kebabCase, maskSensitive, stripHtml as noHtml, stripHtml, normalizeToSearch, onlyLetters, onlyLettersAndNumbers, onlyNumbers, onlySymbols, readingTime, removeSpaces, slugify, snakeCase, toNumber, toSearchableString, truncate, ulid };

//# sourceMappingURL=strings.es.js.map