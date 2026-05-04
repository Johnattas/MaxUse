import conteudoMapa from '../../dist/exports.json?raw';

export const maxUseItems = () => { return [...JSON.parse(conteudoMapa)]; };