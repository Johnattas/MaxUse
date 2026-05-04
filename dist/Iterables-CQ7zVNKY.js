import { toValue, unref } from "vue";
//#region src/Helpers/Iterables/countBy.ts
function countBy(collection, key, value = true) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return 0;
	return (Array.isArray(data) ? data : Object.values(data)).reduce((acc, item) => acc + (item[key] === value ? 1 : 0), 0);
}
//#endregion
//#region src/Helpers/Iterables/filter.ts
function filter(collection, callback) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return Array.isArray(data) ? [] : {};
	if (Array.isArray(data)) return data.filter((item) => callback(item));
	return Object.fromEntries(Object.entries(data).filter(([, item]) => callback(item)));
}
//#endregion
//#region src/Helpers/Iterables/filterBy.ts
function filterBy(collection, key, value = true) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return [];
	if (Array.isArray(data)) return data.filter((item) => item[key] === value);
	return Object.fromEntries(Object.entries(data).filter(([, item]) => item[key] === value));
}
//#endregion
//#region src/Helpers/Iterables/filterByNot.ts
function filterByNot(collection, key, value = true) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return Array.isArray(data) ? [] : {};
	const isExcluded = (item) => {
		const itemValue = item?.[key];
		if (Array.isArray(value)) return value.includes(itemValue);
		return itemValue === value;
	};
	if (Array.isArray(data)) return data.filter((item) => !isExcluded(item));
	return Object.fromEntries(Object.entries(data).filter(([, item]) => !isExcluded(item)));
}
//#endregion
//#region src/Helpers/Iterables/groupBy.ts
/**
* Agrupa os elementos de uma coleção de acordo com o resultado de um iteratee.
* Semelhante ao _.groupBy do Lodash.
*
* @param collection A coleção para iterar.
* @param iteratee O iteratee para transformar as chaves.
* @returns Retorna o objeto agrupado.
*/
function groupBy(collection, iteratee) {
	const data = unref(collection);
	if (!data) return {};
	const items = Array.isArray(data) ? data : Object.values(data);
	const result = {};
	for (const item of items) {
		let key;
		if (typeof iteratee === "function") key = iteratee(item);
		else key = item[iteratee];
		const groupKey = String(key);
		if (!result[groupKey]) result[groupKey] = [];
		result[groupKey].push(item);
	}
	return result;
}
//#endregion
//#region src/Helpers/Iterables/keyBy.ts
function keyBy(collection, key) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return {};
	const items = Array.isArray(data) ? data : Object.values(data);
	return Object.fromEntries(items.map((item) => {
		const k = item[key];
		return [k !== null && k !== "" && !isNaN(Number(k)) ? String(k) + " " : String(k), item];
	}));
}
//#endregion
//#region src/Helpers/Iterables/orderBy.ts
function orderBy(collection, criteria, defaultOrder = "desc") {
	const data = unref(collection);
	if (!data || typeof data !== "object") return [];
	const items = Array.isArray(data) ? data : Object.values(data);
	const rules = [];
	if (typeof criteria === "string") rules.push({
		key: criteria,
		order: defaultOrder
	});
	else if (Array.isArray(criteria)) criteria.forEach((k) => rules.push({
		key: k,
		order: defaultOrder
	}));
	else if (typeof criteria === "object" && criteria !== null) for (const key in criteria) rules.push({
		key,
		order: criteria[key]
	});
	return [...items].sort((a, b) => {
		for (const rule of rules) {
			const valA = a[rule.key];
			const valB = b[rule.key];
			if (valA < valB) return rule.order === "asc" ? -1 : 1;
			if (valA > valB) return rule.order === "asc" ? 1 : -1;
		}
		return 0;
	});
}
//#endregion
//#region src/Helpers/Iterables/orderByWithKey.ts
function orderByWithKey(collection, criteria, object_keyBy, order = "asc", defaultOrder = "asc") {
	return keyBy(orderBy(collection, criteria, defaultOrder), object_keyBy);
}
//#endregion
//#region src/Helpers/Iterables/sortBy.ts
/**
* Cria um array de elementos, ordenados em ordem crescente pelos resultados da execução de cada iteratee.
* Semelhante ao _.sortBy do Lodash.
*
* @param collection A coleção para iterar.
* @param iteratees Os iteratees para ordenar.
* @returns Retorna o novo array ordenado.
*/
function sortBy(collection, iteratees = [(x) => x]) {
	const data = unref(collection);
	if (!data) return [];
	const items = Array.isArray(data) ? [...data] : Object.values(data);
	const iters = Array.isArray(iteratees) ? iteratees : [iteratees];
	return items.sort((a, b) => {
		for (const iteratee of iters) {
			let valA;
			let valB;
			if (typeof iteratee === "function") {
				valA = iteratee(a);
				valB = iteratee(b);
			} else if (typeof iteratee === "string") {
				valA = a[iteratee];
				valB = b[iteratee];
			} else {
				valA = a;
				valB = b;
			}
			if (valA !== valB) {
				if (valA === void 0) return 1;
				if (valB === void 0) return -1;
				if (valA === null) return 1;
				if (valB === null) return -1;
				return valA < valB ? -1 : 1;
			}
		}
		return 0;
	});
}
//#endregion
//#region src/Helpers/Iterables/sum.ts
/**
* Calcula a soma dos valores em uma coleção.
* Semelhante ao _.sum do Lodash.
*
* @param collection A coleção para iterar.
* @returns Retorna a soma.
*/
function sum(collection) {
	const data = unref(collection);
	if (!data) return 0;
	return (Array.isArray(data) ? data : Object.values(data)).reduce((acc, val) => {
		const num = parseFloat(val);
		return acc + (isNaN(num) ? 0 : num);
	}, 0);
}
//#endregion
//#region src/Helpers/Iterables/sumBy.ts
function sumBy(collection, key) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return 0;
	return (Array.isArray(data) ? data : Object.values(data)).reduce((acc, item) => acc + (Number(item[key]) || 0), 0);
}
//#endregion
//#region src/Helpers/Iterables/uniq.ts
/**
* Cria uma versão sem duplicatas de um array.
* Semelhante ao _.uniq do Lodash.
*
* @param array O array a ser processado.
* @returns Retorna o novo array de valores únicos.
*/
function uniq(array) {
	const data = unref(array);
	if (!Array.isArray(data)) return [];
	return Array.from(new Set(data));
}
//#endregion
//#region src/Helpers/Iterables/valuesInKey.ts
function valuesInKey(collection, key, default_value = false) {
	const data = unref(collection);
	if (!data || typeof data !== "object") return [];
	return (Array.isArray(data) ? data : Object.values(data)).flatMap((list) => {
		const value = list[key] ?? default_value;
		if (Array.isArray(value)) return value;
		if (typeof value === "object") return Object.values(value);
		return [value];
	});
}
//#endregion
//#region src/Helpers/Iterables/size.ts
function size(value, allow_number = true) {
	const data = unref(value);
	if (!data || data === "" || data === " ") return 0;
	if (typeof data === "number" && allow_number) return data;
	if (Array.isArray(data) || typeof data === "string") return data.length;
	if (data instanceof Map || data instanceof Set) return data.size;
	if (typeof data === "object") return Object.keys(data).length;
	return data.length;
}
//#endregion
//#region src/Helpers/Iterables/sample.ts
/**
* Obtém um elemento aleatório de uma coleção.
* Semelhante ao _.sample do Lodash.
*
* @param collection A coleção de onde extrair o elemento.
* @returns Retorna o elemento aleatório.
*/
function sample(collection) {
	const data = unref(collection);
	if (!data) return void 0;
	const items = Array.isArray(data) ? data : Object.values(data);
	if (items.length === 0) return void 0;
	return items[Math.floor(Math.random() * items.length)];
}
//#endregion
//#region src/Helpers/Iterables/shuffle.ts
/**
* Embaralha os elementos de um array de forma aleatória.
* Algoritmo de Fisher-Yates.
*
* @param array O array a ser embaralhado.
*/
function shuffle(array) {
	const data = [...toValue(array)];
	for (let i = data.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[data[i], data[j]] = [data[j], data[i]];
	}
	return data;
}
//#endregion
//#region src/Helpers/Iterables/chunk.ts
/**
* Divide um array em sub-arrays de um tamanho específico.
*
* @param array O array a ser dividido.
* @param size O tamanho de cada pedaço.
*/
function chunk(array, size = 1) {
	const data = toValue(array);
	if (!data || data.length === 0 || size <= 0) return [];
	const result = [];
	for (let i = 0; i < data.length; i += size) result.push(data.slice(i, i + size));
	return result;
}
//#endregion
//#region src/Helpers/Iterables/uniqueBy.ts
/**
* Retorna itens únicos de um array de objetos com base em uma propriedade específica.
* Útil para limpar listas de dados vindas de múltiplas fontes ou após junções de arrays.
*
* @param array O array a ser processado (pode ser um Ref).
* @param key A chave usada para identificar a unicidade ou uma função seletora.
* @returns Retorna o novo array de valores únicos.
*/
function uniqueBy(array, key) {
	const data = unref(array);
	if (!Array.isArray(data)) return [];
	const seen = /* @__PURE__ */ new Set();
	return data.filter((item) => {
		const k = typeof key === "function" ? key(item) : item[key];
		if (seen.has(k)) return false;
		seen.add(k);
		return true;
	});
}
//#endregion
//#region src/Helpers/Iterables/findLast.ts
/**
* Encontra o último item de uma lista que satisfaça uma condição.
*
* @param collection A coleção para pesquisar.
* @param predicate A função executada por iteração.
* @returns Retorna o elemento correspondente encontrado, ou undefined.
*/
function findLast(collection, predicate) {
	const data = unref(collection);
	if (!data || !Array.isArray(data)) return void 0;
	for (let i = data.length - 1; i >= 0; i--) if (predicate(data[i], i, data)) return data[i];
}
//#endregion
//#region src/Helpers/Iterables/sortByMulti.ts
/**
* Ordena um array por múltiplos critérios.
*
* @param collection A coleção para ordenar.
* @param criteria Lista de critérios (string de chave ou função de extração de valor).
* @param orders Lista de ordens ('asc' ou 'desc') correspondente aos critérios.
* @returns Retorna o novo array ordenado.
*/
function sortByMulti(collection, criteria, orders = []) {
	const data = unref(collection);
	if (!data || !Array.isArray(data)) return [];
	return [...data].sort((a, b) => {
		for (let i = 0; i < criteria.length; i++) {
			const criterion = criteria[i];
			const order = orders[i] || "asc";
			let valA;
			let valB;
			if (typeof criterion === "function") {
				valA = criterion(a);
				valB = criterion(b);
			} else {
				valA = a[criterion];
				valB = b[criterion];
			}
			if (valA !== valB) {
				if (valA === void 0 || valA === null) return 1;
				if (valB === void 0 || valB === null) return -1;
				if (order === "asc") return valA < valB ? -1 : 1;
				else return valA < valB ? 1 : -1;
			}
		}
		return 0;
	});
}
//#endregion
//#region src/Helpers/Iterables/first.ts
/**
* Retorna o primeiro elemento de um array de forma segura.
*
* @param array O array para obter o elemento.
* @returns O primeiro elemento do array ou undefined se o array estiver vazio.
*/
function first(array) {
	const data = unref(array);
	if (!Array.isArray(data) || data.length === 0) return void 0;
	return data[0];
}
//#endregion
//#region src/Helpers/Iterables/last.ts
/**
* Retorna o último elemento de um array de forma segura.
*
* @param array O array para obter o elemento.
* @returns O último elemento do array ou undefined se o array estiver vazio.
*/
function last(array) {
	const data = unref(array);
	if (!Array.isArray(data) || data.length === 0) return void 0;
	return data[data.length - 1];
}
//#endregion
export { countBy as S, keyBy as _, uniqueBy as a, filterBy as b, sample as c, uniq as d, sumBy as f, orderBy as g, orderByWithKey as h, findLast as i, size as l, sortBy as m, first as n, chunk as o, sum as p, sortByMulti as r, shuffle as s, last as t, valuesInKey as u, groupBy as v, filter as x, filterByNot as y };

//# sourceMappingURL=Iterables-CQ7zVNKY.js.map