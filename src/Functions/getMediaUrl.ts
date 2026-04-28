
export default async (file: string, disk: string) => {
    try {
        const url = apiGetRoute('media.url', { file, disk })
        return { response: true, data: url };
    } catch (error) {
        return { response: false, data: error };
    }

}
