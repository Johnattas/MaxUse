import { type MaybeRefOrGetter, toValue } from 'vue';

/**
 * Obtém o valor de uma variável CSS (CSS Variable) definida no :root.
 *
 * @param colorVar - O nome da variável (ex: '--primary-color') ou a chamada var() (ex: 'var(--primary-color)').
 * @returns O valor da variável CSS (ex: '#ffffff').
 */
export function getColorFromVar(colorVar: MaybeRefOrGetter<string>): string {
    const value = toValue(colorVar);
    if (!value) return '';

    const color_var_name = value.replace(/^var\((--.*?)\)$/, '$1').trim();
    const root: HTMLElement = document.documentElement;
    const style: CSSStyleDeclaration = window.getComputedStyle(root);
    return style.getPropertyValue(color_var_name).trim();
}
