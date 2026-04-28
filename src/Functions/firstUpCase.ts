export default (str: any) => {
    // Dividir a string em palavras usando espaço como separador
    if (!str) {
        return '';
    }
    let words = str.split(' ');

    // Mapear cada palavra e capitalizar a primeira letra
    let capitalizedWords = words.map((word: string) => {
        word = word.toLowerCase();
        if (word === 'de' || word === 'e' || word === 'da' || word === 'do' || word === 'das' || word === 'dos') {
            return word;
        } else if (word.length < 3 || word.includes('(')) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else if (word === 'ltda') {
            return 'LTDA';
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    });

    // Juntar as palavras de volta em uma única string

    return capitalizedWords.join(' ');
};
