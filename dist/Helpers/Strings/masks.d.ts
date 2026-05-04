import { MaybeRefOrGetter } from 'vue';
type RefString = MaybeRefOrGetter<string | number | null | undefined>;
export declare function formatCep(value: RefString): string;
export declare function formatCpf(value: RefString): string;
export declare function formatCnpj(value: RefString): string;
export declare function formatCpfCnpj(value: RefString): string;
export declare function formatPhone(phone_number: RefString): string;
/**
 * Ofusca parte de uma informação sensível.
 * Privacidade (LGPD) ao exibir dados do usuário em telas de confirmação ou perfis públicos.
 *
 * @param value A informação a ser ofuscada.
 * @param type O tipo de informação ('email', 'card' ou 'text').
 */
export declare function maskSensitive(value: RefString, type?: 'email' | 'card' | 'text'): string;
export {};
//# sourceMappingURL=masks.d.ts.map