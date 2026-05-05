import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { n as apiRoute, t as apiGetRoute } from "./apiGetRoute-BH0SVTw6.js";
import axios from "axios";
//#region src/Routes/apiPostRoute.ts
async function apiPostRoute(RouteName, data = null, options = null) {
	const system_options = apiRoute(RouteName, data, options, "POST");
	if (!system_options) return false;
	try {
		const token = system_options.system.token;
		return (await axios.post(system_options.routeURL, data, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": token,
				"X-Requested-With": "XMLHttpRequest"
			},
			withCredentials: true
		})).data;
	} catch (error) {
		console.error(">> Erro ao fazer a requisição - Rota: " + RouteName, error);
		return null;
	}
}
//#endregion
//#region src/Routes/apiPutRoute.ts
async function apiPutRoute(RouteName, data = null, options = null) {
	const system_options = apiRoute(RouteName, data, options, "PUT");
	if (!system_options) return false;
	try {
		const token = system_options.system.token;
		return (await axios.put(system_options.routeURL, data, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": token,
				"X-Requested-With": "XMLHttpRequest"
			},
			withCredentials: true
		})).data;
	} catch (error) {
		console.error(">> Erro ao fazer a requisição:", error);
		return null;
	}
}
//#endregion
//#region src/Routes/apiDeleteRoute.ts
async function apiDeleteRoute(RouteName, data = null, options = null) {
	const system_options = apiRoute(RouteName, data, options, "DELETE");
	if (!system_options) return false;
	try {
		const token = system_options.system.token;
		return (await axios.delete(system_options.routeURL, {
			data,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"X-CSRF-TOKEN": token,
				"X-Requested-With": "XMLHttpRequest"
			},
			withCredentials: true
		})).data;
	} catch (error) {
		console.error(">> Erro ao fazer a requisição:", error);
		return null;
	}
}
//#endregion
//#region src/Routes/apiUploadRoute.ts
async function apiUploadRoute(RouteName, files = null, data = {}, options = null) {
	const system_options = apiRoute(RouteName, data, options, "POST");
	if (!system_options) return false;
	const formData = new FormData();
	for (const key in data) if (Object.prototype.hasOwnProperty.call(data, key)) {
		const value = data[key];
		if (typeof value === "object" && value !== null) formData.append(key, JSON.stringify(value));
		else formData.append(key, value);
	}
	files = { files: files["files"] ?? files };
	files["files"].forEach((fileItem, index) => {
		const file = fileItem;
		file["target"] = null;
		file["blob"] = new Blob([file], { type: file.type });
		file["objectURL"] = URL.createObjectURL(file.blob);
		formData.append(`files[${index}]`, file.blob, file.name);
	});
	try {
		const token = system_options.system.token;
		return (await axios.post(system_options.routeURL, formData, {
			headers: {
				Accept: "application/json",
				"X-CSRF-TOKEN": token,
				"X-Requested-With": "XMLHttpRequest"
			},
			withCredentials: true
		})).data;
	} catch (error) {
		error.value = true;
		return false;
	}
}
//#endregion
//#region src/Routes/index.ts
var Routes_exports = /* @__PURE__ */ __exportAll({
	apiDeleteRoute: () => apiDeleteRoute,
	apiGetRoute: () => apiGetRoute,
	apiPostRoute: () => apiPostRoute,
	apiPutRoute: () => apiPutRoute,
	apiUploadRoute: () => apiUploadRoute
});
//#endregion
export { apiDeleteRoute, apiGetRoute, apiPostRoute, apiPutRoute, apiUploadRoute, Routes_exports as t };

//# sourceMappingURL=routes.es.js.map