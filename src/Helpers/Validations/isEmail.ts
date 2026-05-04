import { type MaybeRefOrGetter, toValue } from 'vue';

/**
 * Valida se uma string é um endereço de e-mail com formato válido.
 *
 * @param value O valor a ser validado (string, Ref ou Getter).
 * @returns True se for um e-mail válido, false caso contrário.
 */
export function isEmail(value: MaybeRefOrGetter<string | null | undefined>): boolean {
    const data = toValue(value);

    if (!data || typeof data !== 'string') return false;


    // Regex robusto para validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(data);
}
