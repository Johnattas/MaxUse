export default (phase_number: number | string) => {
    if (typeof phase_number === 'string') {
        phase_number = parseInt(phase_number);
    }
    if (phase_number === 1) {
        return 'Monofásico';
    }
    if (phase_number === 2) {
        return 'Bifásico';
    }
    if (phase_number === 3) {
        return 'Trifásico';
    }
    return '';
};
