import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
/**
 * Encurta uma string até um limite de caracteres, adicionando reticências (...) ao final se necessário.
 *
 * @param value A string a ser encurtada.
 * @param limit O limite máximo de caracteres.
 * @param suffix O sufixo a ser adicionado (padrão: '...').
 */
export declare function truncate(value: RefString, limit?: number, suffix?: string): string;
/**
 * Converte uma string para um formato amigável para URLs (slug).
 * Remove acentos, caracteres especiais e substitui espaços por hífens.
 *
 * @param value A string a ser convertida.
 */
export declare function slugify(value: RefString): string;
export {};
//# sourceMappingURL=manipulations.d.ts.map