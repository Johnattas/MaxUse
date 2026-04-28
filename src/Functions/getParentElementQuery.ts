export default (target: any, query: any, limit = 10) =>{
    for (let i = 0; i < limit; i++) {
        let elem = target.querySelector(query);
        if (elem) {
            return elem;
        }
        target = target.parentElement;
    }

    return null;
}
