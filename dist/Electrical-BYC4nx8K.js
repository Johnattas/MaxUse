import { t as __exportAll } from "./chunk-pbuEa-1d.js";
import { n as isBlank } from "./isBlank-DrIS5hlK.js";
import { toValue } from "vue";
//#region \0rolldown_dynamic_import_helper.js
var _rolldown_dynamic_import_helper_default = (glob, path, segments) => {
	const query = path.lastIndexOf("?");
	const v = glob[query === -1 || query < path.lastIndexOf("/") ? path : path.slice(0, query)];
	if (v) return typeof v === "function" ? v() : Promise.resolve(v);
	return new Promise((_, reject) => {
		(typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segments ? ". Note that variables only represent file names one level deep." : ""))));
	});
};
//#endregion
//#region src/Helpers/Electrical/wireSize.ts
function toPhasePhase(phaseNeutralVoltage) {
	const array = [
		110,
		120,
		127,
		210,
		220,
		240,
		380,
		440,
		480
	];
	const valor = phaseNeutralVoltage * Math.sqrt(3);
	return array.reduce((anterior, atual) => Math.abs(atual - valor) < Math.abs(anterior - valor) ? atual : anterior);
}
/**
* Calcula a seção nominal de um cabo elétrico com base na corrente, opções de material, isolação, entre outros.
*
* @param current A corrente elétrica do circuito.
* @param options Opções do cálculo, como material, tensão, método de instalação e distância.
* @returns Um objeto com a bitola do cabo, a corrente máxima, a queda de tensão e a porcentagem de perda.
*/
async function wireSize(current, options) {
	const data = toValue(current);
	if (isBlank(data)) return null;
	const currentVal = parseFloat(String(data));
	if (currentVal === 0) return {
		wire: 0,
		max_current: 0,
		voltage_drop: 0,
		loss_percent: 0
	};
	const material = String(options.material ?? "").includes("al") ? "al" : "cu";
	const isolation = String(options.isolation ?? "").includes("xlpe") || String(options.isolation ?? "").includes("epr") || String(options.isolation ?? "").includes("90") ? "90" : "70";
	const method = String(options.method ?? "").toLowerCase() || null;
	const phase_name = Number(options?.phases) > 2 ? "tri" : "bi";
	const phases = Number(options?.phases) > 2 ? 3 : 2;
	const voltage = Number(options?.voltage ?? 220);
	const length = Number(options?.length ?? 10);
	const max_percent = Number(options?.max_loss ?? 5);
	const fca = Number(options?.fca ?? 1);
	const fct = Number(options?.fct ?? 1);
	const circuit_type = String(options?.circuit_type ?? "").toLowerCase();
	let min_section = .5;
	if (circuit_type.includes("lighting") || circuit_type.includes("ilumina")) min_section = 1.5;
	else if (circuit_type.includes("power") || circuit_type.includes("tomada") || circuit_type.includes("forca")) min_section = 2.5;
	const correctedCurrent = currentVal / (fca * fct);
	const resistivity = {
		"cu": {
			"70": .0225,
			"90": .024
		},
		"al": {
			"70": .036,
			"90": .036
		}
	};
	const safeMaterial = material;
	const safeIsolation = isolation;
	const rho = resistivity[safeMaterial][safeIsolation];
	const voltage_base = Number(phases === 3 ? toPhasePhase(Number(voltage)) : voltage);
	const voltage_drop_allowed = (phases === 3 ? voltage_base : voltage) * (max_percent / 100);
	const section = phases === 3 ? Math.sqrt(3) * currentVal * length * rho / voltage_drop_allowed : 2 * currentVal * length * rho / voltage_drop_allowed;
	const calc_section = Math.max(section, min_section);
	const data_return = {
		wire: Number([
			.5,
			.75,
			1,
			1.5,
			2.5,
			4,
			6,
			10,
			16,
			25,
			35,
			50,
			70,
			95,
			120,
			150,
			185,
			240,
			300,
			400,
			500,
			630,
			800,
			1e3
		].find((w) => w >= calc_section) || 1e3),
		max_current: currentVal,
		voltage_drop: Number(voltage_drop_allowed.toFixed(2)),
		loss_percent: Number(max_percent.toFixed(2))
	};
	try {
		if (method) {
			const module = await _rolldown_dynamic_import_helper_default(/* @__PURE__ */ Object.assign({
				"../../json/al-70-bi-a1.json": () => import("./al-70-bi-a1-pSKw8r5O.js"),
				"../../json/al-70-bi-a2.json": () => import("./al-70-bi-a2-DeaStcCq.js"),
				"../../json/al-70-bi-b1.json": () => import("./al-70-bi-b1-CouobJxc.js"),
				"../../json/al-70-bi-b2.json": () => import("./al-70-bi-b2-BF2jB3Hg.js"),
				"../../json/al-70-bi-c.json": () => import("./al-70-bi-c-9U3Ydwom.js"),
				"../../json/al-70-bi-d.json": () => import("./al-70-bi-d-DZZHNrsv.js"),
				"../../json/al-70-bi-e.json": () => import("./al-70-bi-e-Co6Vl6Iz.js"),
				"../../json/al-70-bi-f.json": () => import("./al-70-bi-f-CahLlfge.js"),
				"../../json/al-70-tri-a1.json": () => import("./al-70-tri-a1-D4vfr8Qp.js"),
				"../../json/al-70-tri-a2.json": () => import("./al-70-tri-a2-C41H6fJZ.js"),
				"../../json/al-70-tri-b1.json": () => import("./al-70-tri-b1-ri7iN1T8.js"),
				"../../json/al-70-tri-b2.json": () => import("./al-70-tri-b2-Disa7Ldv.js"),
				"../../json/al-70-tri-c.json": () => import("./al-70-tri-c-Cc013rhG.js"),
				"../../json/al-70-tri-d.json": () => import("./al-70-tri-d-D8rie4fM.js"),
				"../../json/al-70-tri-e.json": () => import("./al-70-tri-e-Do4X9alc.js"),
				"../../json/al-70-tri-f.json": () => import("./al-70-tri-f-BKGlszZ0.js"),
				"../../json/al-70-tri-g.json": () => import("./al-70-tri-g-Cnhs9D8Z.js"),
				"../../json/al-90-bi-a1.json": () => import("./al-90-bi-a1-DytXS-1-.js"),
				"../../json/al-90-bi-a2.json": () => import("./al-90-bi-a2-Dx3TuFSF.js"),
				"../../json/al-90-bi-b1.json": () => import("./al-90-bi-b1-DQL6n2rX.js"),
				"../../json/al-90-bi-b2.json": () => import("./al-90-bi-b2-C74vhPqw.js"),
				"../../json/al-90-bi-c.json": () => import("./al-90-bi-c--0tvWhaI.js"),
				"../../json/al-90-bi-d.json": () => import("./al-90-bi-d-Brf2bLyE.js"),
				"../../json/al-90-bi-e.json": () => import("./al-90-bi-e-QiXcw3Qt.js"),
				"../../json/al-90-bi-f.json": () => import("./al-90-bi-f-BjUoRsh5.js"),
				"../../json/al-90-tri-a1.json": () => import("./al-90-tri-a1-B8agTKyS.js"),
				"../../json/al-90-tri-a2.json": () => import("./al-90-tri-a2-BBVUZk-0.js"),
				"../../json/al-90-tri-b1.json": () => import("./al-90-tri-b1-BEEOkoQk.js"),
				"../../json/al-90-tri-b2.json": () => import("./al-90-tri-b2-BI-5mItv.js"),
				"../../json/al-90-tri-c.json": () => import("./al-90-tri-c-Bl0rFTpH.js"),
				"../../json/al-90-tri-d.json": () => import("./al-90-tri-d-f4dOiZnG.js"),
				"../../json/al-90-tri-e.json": () => import("./al-90-tri-e-BzEDsaXB.js"),
				"../../json/al-90-tri-f.json": () => import("./al-90-tri-f-0Df0oDEi.js"),
				"../../json/al-90-tri-g.json": () => import("./al-90-tri-g-Ci4N_fR7.js"),
				"../../json/cu-70-bi-a1.json": () => import("./cu-70-bi-a1-BOtdkCcW.js"),
				"../../json/cu-70-bi-a2.json": () => import("./cu-70-bi-a2-YMdQUkNg.js"),
				"../../json/cu-70-bi-b1.json": () => import("./cu-70-bi-b1-BUHAs0b0.js"),
				"../../json/cu-70-bi-b2.json": () => import("./cu-70-bi-b2-UaB_S1Nx.js"),
				"../../json/cu-70-bi-c.json": () => import("./cu-70-bi-c-DLmhJnJB.js"),
				"../../json/cu-70-bi-d.json": () => import("./cu-70-bi-d-DFFijtJP.js"),
				"../../json/cu-70-bi-e.json": () => import("./cu-70-bi-e-AHX9oLk8.js"),
				"../../json/cu-70-bi-f.json": () => import("./cu-70-bi-f-DF0PTkv5.js"),
				"../../json/cu-70-tri-a1.json": () => import("./cu-70-tri-a1-VuBNhKRb.js"),
				"../../json/cu-70-tri-a2.json": () => import("./cu-70-tri-a2-xL8HpM5C.js"),
				"../../json/cu-70-tri-b1.json": () => import("./cu-70-tri-b1-BJPZYxZr.js"),
				"../../json/cu-70-tri-b2.json": () => import("./cu-70-tri-b2-DAlpC5jn.js"),
				"../../json/cu-70-tri-c.json": () => import("./cu-70-tri-c-ofa3514l.js"),
				"../../json/cu-70-tri-d.json": () => import("./cu-70-tri-d-D4IZTL5P.js"),
				"../../json/cu-70-tri-e.json": () => import("./cu-70-tri-e-CoT8UnaN.js"),
				"../../json/cu-70-tri-f.json": () => import("./cu-70-tri-f-DJVDt_w8.js"),
				"../../json/cu-70-tri-g.json": () => import("./cu-70-tri-g-CS57y6CE.js"),
				"../../json/cu-90-bi-a1.json": () => import("./cu-90-bi-a1-CjxMoVyW.js"),
				"../../json/cu-90-bi-a2.json": () => import("./cu-90-bi-a2-CDidGDP7.js"),
				"../../json/cu-90-bi-b1.json": () => import("./cu-90-bi-b1-sAbs6kVk.js"),
				"../../json/cu-90-bi-b2.json": () => import("./cu-90-bi-b2-BPtH8_zH.js"),
				"../../json/cu-90-bi-c.json": () => import("./cu-90-bi-c-ieW7h0ye.js"),
				"../../json/cu-90-bi-d.json": () => import("./cu-90-bi-d-BOAqjkXM.js"),
				"../../json/cu-90-bi-e.json": () => import("./cu-90-bi-e-6F3q18A9.js"),
				"../../json/cu-90-bi-f.json": () => import("./cu-90-bi-f-B4npKBZe.js"),
				"../../json/cu-90-tri-a1.json": () => import("./cu-90-tri-a1-C3ZS4_pE.js"),
				"../../json/cu-90-tri-a2.json": () => import("./cu-90-tri-a2-DNdnQUUB.js"),
				"../../json/cu-90-tri-b1.json": () => import("./cu-90-tri-b1-uubM5vwG.js"),
				"../../json/cu-90-tri-b2.json": () => import("./cu-90-tri-b2-CqGjeDHZ.js"),
				"../../json/cu-90-tri-c.json": () => import("./cu-90-tri-c-CLdEiYXG.js"),
				"../../json/cu-90-tri-d.json": () => import("./cu-90-tri-d-CzQv0m1B.js"),
				"../../json/cu-90-tri-e.json": () => import("./cu-90-tri-e-Dv85E4Oy.js"),
				"../../json/cu-90-tri-f.json": () => import("./cu-90-tri-f-vkfgDURy.js"),
				"../../json/cu-90-tri-g.json": () => import("./cu-90-tri-g-DRPH7v2v.js")
			}), `../../json/${material}-${isolation}-${phase_name}-${method}.json`, 4);
			const dados = module.default || module;
			const item = dados.find((c) => c.max_current >= correctedCurrent);
			if (item && item.wire >= data_return.wire) {
				data_return.wire = item.wire;
				data_return.max_current = Number((item.max_current * fca * fct).toFixed(2));
			} else if (item) {
				const wire_table = dados.find((c) => c.wire === data_return.wire);
				if (wire_table) data_return.max_current = Number((wire_table.max_current * fca * fct).toFixed(2));
			}
		}
	} catch (e) {
		console.warn("Erro ao carregar dados da tabela de cabos", e);
	}
	const cosPhi = .95;
	const R_por_metro = rho / data_return.wire;
	const X_por_metro = 1e-4;
	const sinPhi = Math.sqrt(1 - Math.pow(cosPhi, 2));
	const Z_efetiva = R_por_metro * cosPhi + X_por_metro * sinPhi;
	const voltage_drop = Number((phases === 3 ? Math.sqrt(3) : 2) * currentVal * length * Z_efetiva);
	const percent_drop = Number(voltage_drop / voltage_base * 100);
	data_return.voltage_drop = Number(voltage_drop.toFixed(2));
	data_return.loss_percent = Number(percent_drop.toFixed(2));
	return data_return;
}
var calculaCabo = wireSize;
//#endregion
//#region src/Helpers/Electrical/index.ts
var Electrical_exports = /* @__PURE__ */ __exportAll({
	calculaCabo: () => calculaCabo,
	electric: () => electric,
	electrical: () => electrical,
	wireSize: () => wireSize
});
var electrical = {
	wireSize,
	calculaCabo
};
var electric = electrical;
//#endregion
export { wireSize as a, calculaCabo as i, electric as n, electrical as r, Electrical_exports as t };

//# sourceMappingURL=Electrical-BYC4nx8K.js.map