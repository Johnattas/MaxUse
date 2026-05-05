import axios from "axios";
import { useRoute } from "ziggy-js";
//#region src/Routes/apiRoute.ts
function apiRoute(RouteName, data = null, options = null, method = "GET") {
	if (!RouteName) return null;
	const option_load_screen = options?.load_screen ?? null;
	const route = useRoute();
	return {
		option_load_screen,
		routeURL: method === "GET" ? route(RouteName, data) : route(RouteName)
	};
}
//#endregion
//#region src/Routes/apiGetRoute.ts
async function apiGetRoute(RouteName, data = {}, options = null) {
	const system_options = apiRoute(RouteName, data, options, "GET");
	const config = { responseType: "json" };
	if (options?.file === true) config.responseType = "blob";
	try {
		axios.defaults.withCredentials = true;
		return axios.get(system_options.routeURL, config).then((response) => response.data).catch((error) => console.error("[apiGetRoute.ts] AXIOS GET ERROR: " + error.name, system_options.routeURL, error));
	} catch (error) {
		if (options?.error !== false) console.error(">> Erro ao fazer a requisição:", error?.message);
		return null;
	}
}
//#endregion
export { apiRoute as n, apiGetRoute as t };

//# sourceMappingURL=apiGetRoute-BH0SVTw6.js.map