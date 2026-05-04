import conteudoMapa from '../../dist/exports.json';
import { uniq } from './iterables';

export const maxUseItems = () => { return JSON.parse(JSON.stringify(uniq(conteudoMapa))); };