import { type Ref, unref } from 'vue';

type T = string;
export function snakeCase(str: T | Ref<T>): string {
    const data = unref(str);
    const words = data.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);

    if (!words) return '';

    return words.map((word: string) => word.toLowerCase()).join('_');
}
