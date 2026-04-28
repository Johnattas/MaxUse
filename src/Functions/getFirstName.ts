
export  function getFirstName (name: any, alternative: string | null = null) {
    if (!name) {
        return alternative ?? '';
    }
    const value: any = [name];
    let names: any = [];
    let count_split = 0;
    if (name.includes(':')) {
       names = [...names, explode(name, ':')];
       count_split ++;
    }
    if (name.includes(' - ')) {
        names = [...names, explode(name, ' - ')];
        count_split ++;
    }
    if (name.includes(' ')) {
        names = [...names, explode(name, ' ')];
        count_split ++;
    }

    if (count_split === 0){
        names = [value];
    }
    return names.length > 0 ? names[0][0] : alternative ?? '';
}

function explode (value: any, divider: string, min_length = 3): any  {
    const names = value.split(divider);
    const blocks = [];
    for (let i = 0; i < names.length; i++) {
        const name_tst = removeSymbols(names[i])
        if (name_tst.length > min_length) {
            blocks.push(name_tst.trim());
        }
    }
    const result = [];
    for (let block of blocks) {
        const names = value.split(' ');
        for (let name of names) {
            const name_tst = removeSymbols(name)
            if (name_tst.length > min_length) {
                result.push(name_tst.trim());
            }
        }
    }

    return result;
}
