export const goToPage = (router: any, route_name: string, params: any = null) => {


    const data: any = {route_name: route_name}
    if (params){
        data['query'] = params
    }
    router.push(data).then().catch((err:any) => console.error('Erro na navegação', err))
}
