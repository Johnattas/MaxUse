
type DetailsDoc = { isValid: boolean; typeDocument: 'CPF' | 'CNPJ' | null; onlyNumbers: string };
type DocRef<T> = Ref<T> & { apiResult: Reactive<Record<string, string | number | string[] | number[]>>; details: Reactive<DetailsDoc> };
type T = string | null | undefined;

export function useDocRef<T>(initialData: T): DocRef<T> {
    const state = ref<T>() as DocRef<T>;
    state.value = initialData;
    state.apiResult = reactive({});
    state.details = reactive<DetailsDoc>({ isValid: false, typeDocument: null, onlyNumbers: '' });

    const checkIsValid = () => (state.details.isValid = state.details.onlyNumbers && Number(state.apiResult.status)!== 0 && (String(state.details.onlyNumbers).length === 14 || String(state.details.onlyNumbers).length === 11));
    const checkTypeDoc = () => {
        state.details.typeDocument = null;
        if (state.details.onlyNumbers && String(state.details.onlyNumbers).length === 14 && Number(state.apiResult.status) !== 0){
            state.details.typeDocument = 'CNPJ';
            return;
        }
        if (state.details.onlyNumbers && String(state.details.onlyNumbers).length === 11 && Number(state.apiResult.status) !== 0) {
            state.details.typeDocument = 'CPF';
            return;
        }
    };

    const getData = () => {
        const route = useRoute();
        for (const key in state.apiResult) {
            delete state.apiResult[key];
        }
        axios
            .get(route('api.cpf.cnpj', { doc: state.details.onlyNumbers }))
            .then((response) => {
                if (response.data) Object.assign(state.apiResult, response.data);
                state.details.isValid = false;
                state.details.isValid = false;
                checkIsValid();
                checkTypeDoc();
            })
            .catch((error) => console.error('[useDocRef.ts] CPF CNPJ GET ERROR: ' + error.name, error));
    };

    watch(() => state.value, () => {
        getData();
        state.details.onlyNumbers = state.value ? String(state.value).replace(/\D/g, '') : '';
        checkIsValid();
        checkTypeDoc();
    }, {immediate: true})

    return state;
}
