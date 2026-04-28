import { ref, type Ref } from 'vue';
import { ulid } from 'ulid';

type ResetRef<T> = Ref<T> & { reset(): void; initialData: T };

export function useDefaultReset<T>(initialData: T): ResetRef<T> {
    const state = ref<T>() as ResetRef<T>;
    state.initialData = JSON.parse(JSON.stringify(initialData));

    state.reset = () => {
        const new_data = JSON.parse(JSON.stringify(state.initialData));
        if (typeof state.initialData === 'object') {
            if ((state.initialData as any)?.id === 'ulid') (new_data as any).id = ulid().toLowerCase();
            if ((state.initialData as any)?.created_at === 'now') (new_data as any).created_at = new Date().toISOString();
        }
        state.value = new_data;
    };
    state.reset();

    return state as ResetRef<T>;
}
