import localforage from 'localforage';
import { watchDebounced, useStorage } from '@vueuse/core';

export function useRefStorage(key: string, default_value: any = null): any {
    localforage.config({ name: 'caches', storeName: 'use-ref-storages' });

    const state = useStorage(key, default_value);

    localforage.getItem(key).then((value: any) => state.value = value ? value : default_value);
    watchDebounced(state, () => localforage.setItem(key, JSON.parse(JSON.stringify(state.value))), { debounce: 600 });

    return state;
}
