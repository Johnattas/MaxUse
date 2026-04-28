export function extension (file_name: string): string {

    const partes: string[] = file_name.split('.');

    if (partes.length === 1 || (partes[0] === '' && partes.length === 2)) {
        return '';
    }

    const ext = partes.pop();
    if (ext === undefined || ext === '') {
        return '';
    }
    return ext.toLowerCase();

}
