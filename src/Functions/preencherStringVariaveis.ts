import { useDateFormat } from '@vueuse/core';

export function preencherStringVariaveis(str: string, map: Record<string, string>): string {
    if (!str) return '';
    if (!map) return str;

    const data: any = {};

    for (const key in map) {
        if (isDate(map[key]) || key === 'vencimento' || key.includes('data')) {
            data[key] = useDateFormat(map[key], 'DD/MM/YYYY').value;
        } else if (key === 'valor' || key === 'valor_desconto' || key === 'desconto') {
            data[key] = parseFloat(map[key] + '').toFixed(2);
        } else {
            data[key] = map[key];
        }
    }

    return str.replace(/{{(.*?)}}/g, (match, key) => {
        // key.trim() remove espaços extras como em {{ nome }}
        return data[key.trim()] || match; // Retorna o valor ou o próprio placeholder se não encontrar
    });
}
