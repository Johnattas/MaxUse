export function scrollDownToElement (idElementChild: string, idElementRow: string = 'div-mensagens-roll', add_px: number = 0) {
        const container = document.getElementById(idElementRow);
        const element_target = document.getElementById(idElementChild);

        if (container && element_target) {
            element_target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                // inline: 'start'
            });
            //
            // setTimeout(() => {
            //
            //     if (container) {
            //         container.scrollTop += add_px; // Rola 20px para cima (para dar espaço abaixo)
            //     }
            // }, 2500);

            return true;
        }
        return false;
}
