export default  (url: any) => {

    // PRIMEIRO METODO
    const regex = /data=!3m1!4b1!4m4!3m3!8m2!3d([-\d.]+)!4d([-\d.]+)/;
    const matches = url.match(regex);
    if (matches && matches.length >= 3) {
        return {
            latitude: parseFloat(matches[1]),
            longitude: parseFloat(matches[2])
        };
    }

    // SEGUNDO METODO
    const regex2 = /data=.*!8m2!3d([-\d.]+)!4d([-\d.]+)/;
    const matches2 = url.match(regex2);

    if (matches2 && matches2.length >= 3) {
        return {
            latitude: parseFloat(matches2[1]),
            longitude: parseFloat(matches2[2])
        };
    }

    // TERCEIRO METODO
    const regex3 = /query=([-\d.]+),([-\d.]+)/;
    const matches3 = url.match(regex3);

    if (matches3 && matches3.length >= 3) {
        return {
            latitude: parseFloat(matches3[1]),
            longitude: parseFloat(matches3[2])
        };
    }

    return null;

}
