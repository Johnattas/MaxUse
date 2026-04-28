export default async (fnc: Function, repetitions = 50, delay = 100, finaly: Function = () => {}) => {
    let stop = false;
    for (let i = 0; i < repetitions; i++) {
        if (!stop) {
            await sleep(delay);
            stop = fnc();
        }
        if (stop) {
            i = repetitions;
            break;
        }

        if (i === repetitions - 1) {
            finaly();
        }
    }
};
