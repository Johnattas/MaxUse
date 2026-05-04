import { unref } from 'vue';

/**
 * Cria um novo objeto contendo apenas as chaves que você especificar do objeto original.
 *
 * @param obj O objeto original (pode ser um Ref).
 * @param keys As chaves a serem mantidas.
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const data = unref(obj) as T;
    const result = {} as Pick<T, K>;

    if (!data) return result;

    keys.forEach((key) => {
        if (key in data) result[key] = data[key];

    });

    return result;
}

/**
 * Cria um novo objeto removendo as chaves que você não deseja do objeto original.
 *
 * @param obj O objeto original (pode ser um Ref).
 * @param keys As chaves a serem removidas.
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const data = unref(obj) as T;
    const result = { ...data };

    if (!data) return result as Omit<T, K>;

    keys.forEach((key) => {
        if (key in result) delete result[key];

    });

    return result as Omit<T, K>;
}
