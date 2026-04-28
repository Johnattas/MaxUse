export async function apiUploadRoute(RouteName: string, files: any = null, data: any = {}, options = null) {
    const system_options: any = apiSystemRoute(RouteName, data, options, 'POST');

    if (!system_options) {
        return false;
    }

    // Criando o FormData
    const formData = new FormData();

    // Adicionando os dados ao FormData
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const value = data[key];
            if (typeof value === 'object' && value !== null) {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, value);
            }
        }
    }

    files = {
        files: files['files'] ?? files,
    };

    // Adicionando os arquivos ao FormData
    files['files'].forEach((fileItem: any, index: number) => {
        const file = fileItem;
        file['target'] = null;
        file['blob'] = new Blob([file], { type: file.type });
        file['objectURL'] = URL.createObjectURL(file.blob);

        formData.append(`files[${index}]`, file.blob, file.name);
    });

    try {
        const token: string = system_options.system.token;
        const message_response = await axios.post(system_options.routeURL, formData, {
            headers: {
                Accept: 'application/json',
                'X-CSRF-TOKEN': token,
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true,
        });
        return message_response.data;
    } catch (error: any) {
        error.value = true;
        return false;
    }
}
