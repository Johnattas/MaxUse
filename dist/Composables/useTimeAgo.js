import { useTimeAgo as vueUseTimeAgo } from '@vueuse/core';
const ptBr = {
    justNow: 'agora',
    past: (n) => (n.toString().match(/\d/) ? `${n}` : n),
    future: (n) => (n.toString().match(/\d/) ? `Em ${n}` : n),
    month: (n, past) => (n === 1 ? (past ? 'Mês passado' : 'Próximo mês') : `${n} M${n > 1 ? 'eses' : 'ês'}`),
    year: (n, past) => (n === 1 ? (past ? 'Ano passado' : 'Próximo ano') : `${n} year${n > 1 ? 's' : ''}`),
    day: (n, past) => (n === 1 ? (past ? 'Ontem' : 'Amanhã') : `${n} dia${n > 1 ? 's' : ''}`),
    week: (n, past) => (n === 1 ? (past ? 'Semana passada' : 'Próxima semana') : `${n} semana${n > 1 ? 's' : ''}`),
    hour: (n) => `${n}h${n > 1 ? 's' : ''}`,
    minute: (n) => `${n}m${n > 1 ? '' : ''}`,
    second: (n) => `${n}s${n > 1 ? 's' : ''}`
};
const timeAgoAbbrev = {
    justNow: 'Agora',
    past: (n) => (n.toString().match(/\d/) ? `${n}` : n),
    future: (n) => (n.toString().match(/\d/) ? `Em ${n}` : n),
    month: (n, past) => (n === 1 ? (past ? '1 mês' : 'Próx. mês') : `${n} M${n > 1 ? 'eses' : 'ês'}`),
    year: (n, past) => (n === 1 ? (past ? '1 ano' : 'Próx. ano') : `${n} year${n > 1 ? 's' : ''}`),
    day: (n, past) => (n === 1 ? (past ? 'Ontem' : 'Amanhã') : `${n} dia${n > 1 ? 's' : ''}`),
    week: (n, past) => (n === 1 ? (past ? '1 Sem' : 'Próx. sem.') : `${n} sem.${n > 1 ? '' : ''}`),
    hour: (n) => `${n}h${n > 1 ? 's' : ''}`,
    minute: (n) => `${n}m${n > 1 ? 'm' : ''}`,
    second: (n) => `${n}s${n > 1 ? 's' : ''}`
};
const timeAgoAction = {
    justNow: 'Realizar Hoje',
    past: (n) => (n.toString().match(/\d/) ? `Atrasado: ${n}` : n),
    future: (n) => (n.toString().match(/\d/) ? `Realizar em ${n}` : n),
    month: (n, past) => (n === 1 ? (past ? 'Atrasado (1 Mês)' : 'Próximo mês') : `${n} M${n > 1 ? 'eses' : 'ês'}`),
    year: (n, past) => (n === 1 ? (past ? 'Ano passado' : 'Próximo ano') : `${n} year${n > 1 ? 's' : ''}`),
    day: (n, past) => (n === 1 ? (past ? 'Atrasado (Ontem)' : 'Realizar até amanhã') : `${n} dia${n > 1 ? 's' : ''}`),
    week: (n, past) => (n === 1 ? (past ? '1 semana' : '1 semana') : `${n} semana${n > 1 ? 's' : ''}`),
    hour: (n) => `${n}h${n > 1 ? 's' : ''}`,
    minute: (n) => `${n}m${n > 1 ? '' : ''}`,
    second: (n) => `${n}s${n > 1 ? 's' : ''}`
};
const timeAgoLimitAbrev = {
    justNow: 'Hoje',
    past: (n) => (n.toString().match(/\d/) ? `Atrasado: ${n}` : n),
    future: (n) => (n.toString().match(/\d/) ? `Em ${n}` : n),
    month: (n, past) => (n === 1 ? (past ? 'Mês passado' : 'Próximo mês') : `${n} M${n > 1 ? 'eses' : 'ês'}`),
    year: (n, past) => (n === 1 ? (past ? 'Ano passado' : 'Próximo ano') : `${n} year${n > 1 ? 's' : ''}`),
    day: (n, past) => (n === 1 ? (past ? 'Ontem' : 'Amanhã') : `${n} dia${n > 1 ? 's' : ''}`),
    week: (n, past) => (n === 1 ? (past ? '1 semana' : '1 semana') : `${n} semana${n > 1 ? 's' : ''}`),
    hour: (n) => `${n}h${n > 1 ? 's' : ''}`,
    minute: (n) => `${n}m${n > 1 ? '' : ''}`,
    second: (n) => `${n}s${n > 1 ? 's' : ''}`
};
const timeAgoLimit = {
    justNow: 'Realizar Hoje',
    past: (n) => (n.toString().match(/\d/) ? `Atrasado: ${n}` : n),
    future: (n) => (n.toString().match(/\d/) ? `Realizar em ${n}` : n),
    month: (n, past) => (n === 1 ? (past ? 'Atrasado (1 Mês)' : 'Próximo mês') : `${n} M${n > 1 ? 'eses' : 'ês'}`),
    year: (n, past) => (n === 1 ? (past ? 'Ano passado' : 'Próximo ano') : `${n} year${n > 1 ? 's' : ''}`),
    day: (n, past) => (n === 1 ? (past ? 'Atrasado (Ontem)' : 'Realizar até amanhã') : `${n} dia${n > 1 ? 's' : ''}`),
    week: (n, past) => (n === 1 ? (past ? '1 semana' : '1 semana') : `${n} semana${n > 1 ? 's' : ''}`),
    hour: (n) => `${n}h${n > 1 ? 's' : ''}`,
    minute: (n) => `${n}m${n > 1 ? '' : ''}`,
    second: (n) => `${n}s${n > 1 ? 's' : ''}`
};
const FORMAT_MAP = {
    br: ptBr,
    abbrev: timeAgoAbbrev,
    action: timeAgoAction,
    limit: timeAgoLimit,
    limitAbbrev: timeAgoLimitAbrev,
    limit_abbrev: timeAgoLimitAbrev,
    future: timeAgoLimitAbrev
};
export const timeAgo = (initialDate, format = 'br') => vueUseTimeAgo(initialDate, { messages: FORMAT_MAP[format] ?? ptBr });
export const useTimeAgo = (initialDate, format = 'br') => timeAgo(initialDate, format);
