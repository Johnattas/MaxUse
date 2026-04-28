export default async (blobUrl: any, filename: string = '', disk: string = '', folder: any = null) => {
    try {
        const extension: string = filename.split('.')?.pop() ?? ''; // Pega a extensão do arquivo
        const responseBlob = await fetch(blobUrl);
        const blob = await responseBlob.blob();

        // Criando o FormData
        const formData = new FormData();
        formData.append('file', blob, filename); // Adiciona o arquivo com o nome original
        formData.append('disk', disk);
        formData.append('folder', folder);
        formData.append('file_name', filename);
        formData.append('extension', extension);

        let routeURL = route('files.upload');
        const response = await axios.post(routeURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return { response: true, data: response.data };
    } catch (error) {
        return { response: false, data: error };
    }
};
