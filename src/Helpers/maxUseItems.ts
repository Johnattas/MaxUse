import conteudoMapa from '../../dist/exports.json';
import { uniq } from './Iterables';

export const maxUseItems = () => { return JSON.parse(JSON.stringify(uniq(conteudoMapa))); };