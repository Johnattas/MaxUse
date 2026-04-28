export default (hex: any) =>{
    // Remove o símbolo de hash (#) se estiver presente
    hex = hex.replace(/^#/, '');

    // Converte cor de 3 dígitos em 6 dígitos
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map((hexChar : any) => hexChar + hexChar)
            .join('');
    }

    // Verifica se o comprimento é válido
    if (hex.length !== 6) {
        throw new Error('Invalid HEX colorClass.');
    }

    // Inverte a cor
    let invertedColor = '';
    for (let i = 0; i < 6; i += 2) {
        let colorComponent = parseInt(hex.substr(i, 2), 16);
        let invertedComponent = (238 - colorComponent).toString(16).padStart(2, '0');
        invertedColor += invertedComponent;
    }

    return `#${invertedColor}`;
}
