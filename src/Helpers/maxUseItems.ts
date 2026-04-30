import conteudoMapa from '../../dist/exports.json?raw';

export function maxUseItems() {
    return JSON.parse(conteudoMapa);
}