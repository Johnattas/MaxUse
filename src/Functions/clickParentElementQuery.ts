export default (target: any, query: any, limit = 10) => {
    if (!target) {

        return null;
    }

    if (typeof query === 'string') {
        query = [query];
    }

    for (let q = 0; q < query.length; q++) {
        for (let i = 0; i < limit; i++) {
            let elem = target.querySelector(query[q]);
            if (elem) {

                elem.click();
                elem.focus();
                return elem;
            }
            target = target.parentElement;
        }
    }


    return null;
};
