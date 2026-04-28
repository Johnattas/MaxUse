import { getFirstName } from './getFirstName';

export function getLetterName(name: string) {
    const firstName = getFirstName(name);
    return firstName ? firstName[0] : '';
}
