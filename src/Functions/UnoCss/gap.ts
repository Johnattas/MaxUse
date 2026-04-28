import { getCssSize } from './getCssSize';

type Params = (number | string)[];

export function gap(params: Params): Record<string, string> | {} {
    if (params.length < 3) {
        return {};
    }

    const gap_value = String(params[2]).replace(':', '');
    if (params[1] && String(params[1]).toLowerCase() === 'row') {
        return { 'row-gap': getCssSize(gap_value) };
    } else if (params[1] && String(params[1]).toLowerCase() === 'gap') {
        return { 'column-gap': getCssSize(gap_value) };
    }

    return { gap: getCssSize(gap_value) };
}
