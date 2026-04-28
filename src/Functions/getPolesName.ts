export default (phase_number: number | string) => {
    if (typeof phase_number === 'string') {
        phase_number = parseInt(phase_number);
    }
    if (phase_number === 1) {
        return 'Monopolar';
    }
    if (phase_number === 2) {
        return 'Bipolar';
    }
    if (phase_number === 3) {
        return 'Tripolar';
    }
    return '';
};
