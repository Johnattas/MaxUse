
export function minutesAgo (date: any) {
    const dataPassada: Date = new Date(date); // Ou sua string do banco
    const agora: Date = new Date();

    // Subtrai as datas (retorna diferença em milissegundos)
    const diferencaMs: number = agora.getTime() - dataPassada.getTime();

    // Converte: ms -> segundos -> minutos
    // Math.floor para arredondar para baixo (minutos completos)

    return parseInt(Math.floor(diferencaMs / 1000 / 60) + '');
}
