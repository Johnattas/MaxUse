import conteudoMapa from '../../dist/exports.json?raw';
import { cloneDeep } from './iterables';

export const maxUseItems = () => { return cloneDeep(JSON.parse(conteudoMapa)); };