import { toast } from 'vue3-toastify';

export function showToast(html_content: string, typeToast: any = 'success', delayToClose: number = 3000) {
    toast(html_content, {
        theme: 'auto',
        type: typeToast ?? 'success',
        autoClose: delayToClose,
        closeOnClick: true,
        transition: 'slide',
        position: 'bottom-right',
        hideProgressBar: true,
        style: {
            fontSize: '0.9rem',
        },
        dangerouslyHTMLString: html_content.includes('<') && html_content.includes('>'),
    });
}
