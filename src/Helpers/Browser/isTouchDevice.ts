/**
 * Detecta se o dispositivo atual possui suporte a interações via toque (touch).
 *
 * @returns true se o dispositivo suportar toque, caso contrário false.
 */
export function isTouchDevice(): boolean {
    return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0
    );
}
