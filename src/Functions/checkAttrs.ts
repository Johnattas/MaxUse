export function checkAttrs(attrs: any, paramString: string | string[], if_true: any = true, if_false: any = false) {

    if (typeof paramString === 'string') {
        paramString = [ paramString]
    }

    for (let i = 0; i < paramString.length; i++) {
        const camel = _.camelCase(paramString); // paramString
        const kebab = _.kebabCase(paramString); // param-string
        const snake = _.snakeCase(paramString); // param_string

        let data = attrs[camel];

        if (data === undefined || data === 'undefined') {
            data = attrs[kebab];
        }

        if (data === undefined || data === 'undefined') {
            data = attrs[snake];
        }

        if (data === '') {
            data = '-';
        }

        if (!data || data === 'undefined' || data === 'false' || data === 'null') {
            continue;
        }

        return if_true === 'value' ? data : true;
    }

    return if_false;

}
