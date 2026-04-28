export async function apiGetNullResponse(onlyArray: boolean, responseData: any) {
    if (!responseData) {
        responseData = { id: null };
    }

    if (onlyArray) {
        return responseData;
    }
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ok: true,
                status: 200,
                json: async () => responseData,
            });
        }, 10);
    });
}


