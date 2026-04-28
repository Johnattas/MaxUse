export function calculaDisjuntor (corrente: string | number, porcentagem = 5) {
    corrente = toNumber(corrente, 2) * (1 + porcentagem/100);
    const disjuntores = [10, 13, 16, 20, 25, 32, 40, 50, 63, 70, 80, 90, 100, 112, 125, 150, 160, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000];
    if (disjuntores.length === 0) {
        throw new Error('A lista de disjuntores está vazia.');
    }

    let disjuntorMaisProximo = disjuntores[0];
    let menorDiferenca = Math.abs(corrente - disjuntorMaisProximo);

    for (let i = 1; i < disjuntores.length; i++) {
        const diferencaAtual = Math.abs(corrente - disjuntores[i]);
        if (diferencaAtual < menorDiferenca && corrente <= disjuntores[i]) {
            menorDiferenca = diferencaAtual;
            disjuntorMaisProximo = disjuntores[i];
        }
    }

    return disjuntorMaisProximo;
}
