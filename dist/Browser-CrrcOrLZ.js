//#region src/Helpers/Browser/isTouchDevice.ts
/**
* Detecta se o dispositivo atual possui suporte a interações via toque (touch).
*
* @returns true se o dispositivo suportar toque, caso contrário false.
*/
function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
//#endregion
export { isTouchDevice as t };

//# sourceMappingURL=Browser-CrrcOrLZ.js.map