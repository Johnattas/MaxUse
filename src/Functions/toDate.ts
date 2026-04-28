export function toDate (variable: any): Date | false {
    if (variable instanceof Date){
        return  variable;
    }
    else if (typeof variable === 'string' && variable.length > 0){
        return new Date(variable.replace(/-/g, '/'));
    }
    return false;
}
