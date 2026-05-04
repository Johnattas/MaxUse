import * as Browser from './Browser';
import * as Dates from './Dates';
import * as Iterables from './Iterables';
import * as MathHelpers from './Math';
import * as Objects from './Objects';
import * as Strings from './Strings';
import * as Types from './Types';
import * as Validations from './Validations';
import * as Electrical from './Electrical';
import * as Format from './Format';
import * as VueUse from './VueUse';

/**
 * Retorna a lista de todos os nomes de exports disponíveis na biblioteca MaxUse.
 * Gera a lista dinamicamente a partir dos módulos fonte, sem depender do dist.
 */
export const maxUseItems = (): string[] => {
    const allKeys = new Set<string>();

    const modules = [
        Browser,
        Dates,
        Iterables,
        MathHelpers,
        Objects,
        Strings,
        Types,
        Validations,
        Electrical,
        Format,
        VueUse
    ];

    for (const mod of modules) for (const key of Object.keys(mod)) {
        // Ignora o objeto completo do VueUse para não poluir a lista
        if (key === 'vueUse') continue;
        allKeys.add(key);
    }


    return Array.from(allKeys).sort();
};

export const maxUseAutoImport = () => {
    const items = [...maxUseItems()];
    console.log(items.filter((i) => i.includes('ow')));
    return {
        '@maxvue/max-use': maxUseItems()
    };
};