export function randomNumber (min: number = 0, max: number = 1000) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // A fórmula para gerar o número aleatório no intervalo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
