export default (stage: string) => {
    if (stage === 'documentation') {
        return 'Aguardando Documentação';
    }
    if (stage === 'design') {
        return 'Aguardando Elaboração';
    }
    if (stage === 'concessionaire') {
        return 'Em análise pela concessionária'
    }
    if (stage === 'payment') {
        return 'Aguardando pagamento'
    }
    if (stage === 'inspection') {
        return 'Aguardando Vistoria'
    }
    if (stage === 'evaluation') {
        return 'Aguardando Avaliação'
    }
    if (stage === 'evaluation') {
        return 'Aguardando Avaliação'
    }
    if (stage === 'end') {
        return 'Finalizado'
    }
    return stage;
};
