export function generateProtocol () {
    const agora: Date = new Date();

    // 2. Calcula o dia do ano
    const inicioDoAno = new Date(agora.getFullYear(), 0, 1);
    const diffEmMilissegundos = agora.getTime() - inicioDoAno.getTime();
    const umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    // Adiciona 1 para que 1º de janeiro seja o dia 1
    const diaDoAno = Math.floor(diffEmMilissegundos / umDiaEmMilissegundos) + 1;

    // 3. Monta o prefixo do protocolo
    // Pega os 2 últimos dígitos do ano (ex: 2024 -> "24")
    const prefixoAno = agora.getFullYear().toString().slice(-2);
    // Formata o dia do ano para ter sempre 3 dígitos (ex: 5 -> "005")
    const prefixoDia = diaDoAno.toString().padStart(3, '0');
    const prefixo = `${prefixoAno}${prefixoDia}`;

    // 4. Gera um sufixo aleatório de 5 dígitos (entre 10000 e 99999)
    const min = 10000;
    const max = 99999;
    const sufixo = Math.floor(Math.random() * (max - min + 1)) + min;

    // 5. Retorna o protocolo completo

    return `${prefixo}${sufixo}`;
}
